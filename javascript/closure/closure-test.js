// https://blog.csdn.net/dovlie/article/details/76339244

function a() {
  var name = 'I am a variable in function ';
  return function () {
    return name;
  }
}

var b = a();
console.log(b());
console.log('—————————————————————————')

function fn() {
  var num = 3
  return function () {
    var n = 0;
    console.log(++n)
    console.log(++num)
  }
}

var fn1 = fn()
fn1()
fn1()
console.log('—————————————————————————')

for (var i = 0; i < 5; ++i) {
  setTimeout(function () {
    console.log(i + '');
  }, 100)
}

// IIFE
for (var i = 0; i < 5; ++i) {
  (function (i) {
    setTimeout(function () {
      console.log(i + '');
    }, 100)
  })(i)

}

console.log('—————————————————————————')

var num = 15
var fn1 = function (x) {
  if (x > num) {
    console.log(x)
  }
}

void function (fn2) {
  var num = 100
  fn2(30)
}(fn1)

console.log('—————————————————————————')
