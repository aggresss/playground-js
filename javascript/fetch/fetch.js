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
