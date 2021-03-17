'use strict';

const controller = new AbortController();
const signal = controller.signal;

function fetch_test() {
  fetch('https://httpstat.us/200?sleep=5000', { signal })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch((err) => {
      if (err.name === 'AbortError') {
          console.log('aborted');
      } else {
          console.log('error');
      }
  });

  setTimeout(() => {
    controller.abort();
  }, 3000);
}


function fetchWithTimeout (url, option, timeout_ms) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject('timeout'), timeout_ms);
    return fetch(url, option)
      .then(response => {
        clearTimeout(timeout);
        if (response.status === 200) {
          return resolve(response);
        }
        return reject(response);
      }, rejectReason => {
        clearTimeout(timeout);
        return reject(rejectReason);
      });
  });
}
