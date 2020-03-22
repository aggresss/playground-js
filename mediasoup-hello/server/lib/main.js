const os = require("os");
const http = require("http");
const https = require('https');                                                                                    │     3  env_path_a ~/workspace-scratch/depot_tools
const fs = require('fs');                                                                                          │     4
const mediasoup = require("mediasoup");

const key_file = process.env.HTTPS_CERT_PRIVKEY || `${__dirname}/certs/server.key`;                                │     6  export HTTPS_CERT_PRIVKEY="/home/yujia/Documents/certs/www.router7.cn/3596820_www.router7.cn.key"
const cert_file = process.env.HTTPS_CERT_FULLCHAIN || `${__dirname}/certs/server.crt`;                             │     7  export MEDIASOUP_LISTEN_IP="100.100.57.94"                                                                                                                   │     8  export MEDIASOUP_ANNOUNCED_IP="100.100.57.94"
const options = {                                                                                                  │     9
  key: fs.readFileSync(key_file),                                                                                  │
  cert: fs.readFileSync(cert_file),                                                                                │yujia@iot-test:~/workspace-scratch/playground-js/mediasoup-hello/sender$ r 9 5,6
};

const port = process.env.PORT || 9000;
const mediaCodecs = [
  {
    kind: "video",
    name: "VP9",
    mimeType: "video/VP9",
    clockRate: 90000,
    parameters: {}
  }
];

const listenIps = [ process.env.MEDIASOUP_ANNOUNCED_IP || "127.0.0.1" ];
const getWorkerNum = () => os.cpus().length;

async function handle(req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });

  const [url, qs] = req.url.split("?q=");
  const query = qs ? JSON.parse(decodeURIComponent(qs)) : {};

  console.log(`[req]: ${url}`);
  switch (url) {
    case "/rtpCapabilities": {
      res.end(JSON.stringify(pubRouter.rtpCapabilities));
      break;
    }
    case "/createTransport": {
      const { direction } = query;
      // if recv client, pick router randomly
      const router =
      direction === "send"
      ? pubRouter
      : subRouters[(Math.random() * getWorkerNum()) | 0];

      console.log("transport created on router.id:", router.id);
      const transport = await router.createWebRtcTransport({ listenIps });
      transportMap.set(transport.id, transport);

      res.end(
        JSON.stringify({
          id: transport.id,
          iceParameters: transport.iceParameters,
          iceCandidates: transport.iceCandidates,
          dtlsParameters: transport.dtlsParameters
        })
      );
      break;
    }
    case "/transportConnect": {
      const { transportId, dtlsParameters } = query;
      const transport = transportMap.get(transportId);
      await transport.connect({ dtlsParameters });

      res.end(JSON.stringify({}));
      break;
    }
    case "/produce": {
      const { transportId, kind, rtpParameters } = query;
      const transport = transportMap.get(transportId);
      const producer = await transport.produce({ kind, rtpParameters });

      // sync w/ every routers
      for (const router of subRouters) {
        await pubRouter.pipeToRouter({ producerId: producer.id, router });
      }

      res.end(JSON.stringify({ id: producer.id }));
      break;
    }
    case "/consume": {
      const { transportId, producerId, rtpCapabilities } = query;
      const transport = transportMap.get(transportId);
      const consumer = await transport.consume({
        producerId,
        rtpCapabilities
      });

      res.end(
        JSON.stringify({
          id: consumer.id,
          producerId,
          kind: consumer.kind,
          rtpParameters: consumer.rtpParameters
        })
      );
      break;
    }
    default:
      console.error("N/A route", url);
  }
}






(async function() {
  let workerNum = getWorkerNum();
  if (workerNum < 2) throw new Error("This server needs at least 2 cpu cores!");

  const routers = [];
  while (workerNum--) {
    const worker = await mediasoup.createWorker();
    const router = await worker.createRouter({ mediaCodecs });
    routers.push(router);
  }

  const [pubRouter, ...subRouters] = routers;
  const transportMap = new Map();
  console.log(`create 1 router for pub, ${subRouters.length} routers for sub`);

  if (env.process.HTTPS) {
    http.createServer(handle).listen(port);
  } else {
    https.createSever(options, handle).listen(port);
  }
  console.log("server started at ", listenIps, "port:", port);
})();
