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

console.log(getRandomId(12));
