const fetch = require('node-fetch');

const request = (path, query) => {
  const qs = query ? "?q=" + encodeURIComponent(JSON.stringify(query)) : "";
  return fetch(`http://localhost:9000/${path}${qs}`)
    .then(res => res.json())
    .catch(() => console.log('no Response.'));
};

(async function() {
  const cpus = await request("cpus");
  console.log("cpus:", cpus);
  const mem = await request("mem");
  console.log("mem:", mem);
})();
