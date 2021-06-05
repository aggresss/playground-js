# Reference

- https://www.jianshu.com/p/1e75bd387aa0
- https://www.cnblogs.com/mingweiyard/p/7483869.html
- https://www.cnblogs.com/jsgoshu/p/11444404.html

## async function语法

- 自动将常规函数转换成 Promise，返回值也是一个 Promise 对象
- 只有 async 函数内部的异步操作执行完，才会执行 then 方法指定的回调函数
- async 函数内部可以使用 await

async 函数返回的是一个 Promise 对象。从文档中也可以得到这个信息。async 函数（包含函数语句、函数表达式、Lambda表达式）会返回一个 Promise 对象，如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。

## await

await 的意思就是等待。它后面可以跟一个表达式。如果是值(如字符串、数字、普通对象等等)的话，返回值就是本身的值。
await 最常用的是后面跟一个 promise 对象。await 会等待这个 promise 的状态由 pending 转为 fulfilled 或者 rejected。在此期间它会阻塞，延迟执行 await 语句后面的语句。
如果 promise 对象的结果是 resolve，它会将 resolve 的值，作为 await 表达式的运算结果。
await 关键字只能在使用 async 定义的函数的内部使用。所有 async 函数都会返回一个 promise，该 promise 最终 resolve 的值就是在函数中 return 的内容。

## 为什么需要 async/await

async/await 使得用同一种构造 (古老而好用的 try/catch) 处理同步和异步错误成为可能。
