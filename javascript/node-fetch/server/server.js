const os = require("os");
const http = require("http");

const port = process.env.PORT || 9000;
const listenIps = ["127.0.0.1"];
const getWorkerNum = () => os.cpus().length;

(async function() {
  http
    .createServer(async (req, res) => {
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      });

      const [url, qs] = req.url.split("?query=");
      const query = qs ? JSON.parse(decodeURIComponent(qs)) : {};

      console.log(`[req]: ${url}`);
      switch (url) {
        case "/cpus": {
          res.end(JSON.stringify({cpus: os.cpus().length}));
          break;
        }
        case "/mem": {
          res.end(JSON.stringify({
            totalMem: os.totalmem(),
            freeMem: os.freemem()
          }));
          break;
        }
        default:
          res.end(JSON.stringify({}))
          console.error("N/A route", url);
      }
    })
    .listen(port);

  console.log("server started at port", port);
})();
