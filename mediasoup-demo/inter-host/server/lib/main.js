const http = require("http");
const mediasoup = require("mediasoup");



const port = process.env.PORT || 3000;
const mediaCodecs = [
  {
    kind: "video",
    name: "VP9",
    mimeType: "video/VP9",
    clockRate: 90000,
    parameters: {}
  }
];
const listenIp = process.env.MEDIASOUP_ANNOUNCED_IP || "127.0.0.1";
const remoteIp = process.env.MEDIASOUP_REMOTE_IP || "127.0.0.1";
let room = {};

const request = (path, query) => {
  const qs = query ? "?q=" + encodeURIComponent(JSON.stringify(query)) : "";
  return fetch(`http://${remoteIp}:3000/${path}${qs}`).then(res => res.json());
};

(async function() {
  room.worker = await mediasoup.createWorker();
  room.router = await room.worker.createRouter({ mediaCodecs });

  http
    .createServer(async (req, res) => {
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      });

      const [url, qs] = req.url.split("?q=");
      const query = qs ? JSON.parse(decodeURIComponent(qs)) : {};

      console.log(`[req]: ${url}`);
      switch (url) {
        case "/rtpCapabilities": {
          res.end(JSON.stringify(room.router.rtpCapabilities));
          break;
        }
        case "/reportAddress": {
          const { ip, port } = query;
          room.remoteIp = ip;
          room.remotePort = port;
          await room.pipeTransport.connect({"ip": room.remoteIp, "port": room.remotePort});

          res.end(JSON.stringify({}));
          break;
        }
        case "/createPipeTransport": {
          room.pipeTransport = await room.router.createPipeTransport({ listenIp });
          await request(
            "reportAddress",
            {
              ip: room.pipeTransport.tuple.localIp,
              port: room.pipeTransport.tuple.localPort
            }
          );
          res.end(JSON.stringify({
            ip: room.pipeTransport.tuple.localIp,
            port: room.pipeTransport.tuple.localPort
          }));
          console.log('local tuple', room.pipeTransport.tuple.localIp, ':', room.pipeTransport.tuple.localPort);
          break;
        }
        case "/createWebRtcTransport": {
          room.webrtcTransport = await router.createWebRtcTransport({ listenIp });

          res.end(
            JSON.stringify({
              id: room.webrtcTransport.id,
              iceParameters: room.webrtcTransport.iceParameters,
              iceCandidates: room.webrtcTransport.iceCandidates,
              dtlsParameters: room.webrtcTransport.dtlsParameters
            })
          );
          break;
        }
        case "/transportConnect": {
          const { transportId, dtlsParameters } = query;
          await room.webrtcTransport.connect({ dtlsParameters });

          res.end(JSON.stringify({}));
          break;
        }
        case "/reportRtpParameters": {
          const { kind, rtpParameters } = query;
          room.remoteKind = kind;
          room.remoteRtpParameters = rtpParameters;
          break;
        }
        case "/produce": {
          const { kind, rtpParameters } = query;
          room.webrtcProducer = await room.webrtcTransport.produce({ kind, rtpParameters });
          room.pipeConsumer = await room.pipeTransport.consume({"producerId": room.webrtcProducer.id});

          await request(
            "reportRtpParameters",
            {
              kind,
              rtpParameters
            }
          );

          res.end(JSON.stringify({ id: room.webrtcProducer.id }));
          break;
        }
        case "/consume": {
          const { producerId, rtpCapabilities } = query;
          room.pipeProducer = await room.pipeTransport.produce({
            id: producerId,
            kind: room.remoteKind,
            rtpParameters: room.remoteRtpParameters
          });
          room.webrtcConsumer = await room.webrtcTransport.consume({
            producerId,
            rtpCapabilities
          });

          res.end(
            JSON.stringify({
              id: room.webrtcConsumer.id,
              producerId,
              kind: room.remoteKind,
              rtpParameters: room.remoteRtpParameters
            })
          );
          break;
        }
        default:
          console.error("N/A route", url);
      }
    })
    .listen(port);

  console.log("server started at port", port);
})();
