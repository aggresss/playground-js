'use strict'

function getRandomId(length) {
  let result = [];
  for (var i = 0; i < length; i++) {
    var ranNum = Math.ceil(Math.random() * 35);
    if (ranNum <= 25) {
      result.push(String.fromCharCode(97 + ranNum));
    } else {
      result.push(String.fromCharCode(48 + ranNum - 26));
    }
  }
  return result.join('');
}

function getRandomKey(length) {
  let result = [];
  for (let i = 0; i < length; i++) {
    let ranNum = Math.ceil(Math.random() * 63);
    if (ranNum <= 25) {
      result.push(String.fromCharCode(97 + ranNum));
    } else if (ranNum <= 35) {
      result.push(String.fromCharCode(48 + ranNum - 26));
    } else if (ranNum <= 61) {
      result.push(String.fromCharCode(65 + ranNum - 36));
    } else if (ranNum <= 62) {
      result.push(String.fromCharCode(45));
    } else if (ranNum <= 63) {
      result.push(String.fromCharCode(95));
    }
  }
  return result.join('');
}

console.log(getRandomId(12));
console.log(getRandomKey(40));

