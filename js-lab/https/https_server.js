#!/usr/bin/env node

// Reference: https://nodejs.org/api/https.html

const https = require('https');
const fs = require('fs');
const port = process.env.PORT || 443;
const key_file = process.env.HTTPS_CERT_PRIVKEY || `${__dirname}/certs/server.key`;
const cert_file = process.env.HTTPS_CERT_FULLCHAIN || `${__dirname}/certs/server.crt`;

const options = {
  key: fs.readFileSync(key_file),
  cert: fs.readFileSync(cert_file),
};

(async function() {
  const server = https.createServer(options, async (req, res) => {
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*"
      });
    res.end('Hello, World!\n');
  });

  server.on('connection', sock => {
      console.log('Client connected from ' + sock.remoteAddress);
  });
  server.listen(port, "0.0.0.0");
  console.log(`Server running at https://:localhost:${port}/`);
})();

