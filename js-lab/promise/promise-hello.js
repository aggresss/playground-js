#!/usr/bin/env node

var promise = function(isReady){
  return new Promise(function(resolve, reject){
    // do somthing, maybe async
    if (isReady){
      return resolve('hello world');
    } else {
      return reject('failure');
    }
  });
}
//Promise实例生成以后，可以用then方法分别指定Resolved状态和Reject状态的回调函数。
promise(true).then(function(value){
  // success,这里是resolve的回调函数
  console.log(value); //hello world
}, function(err){
  // failure，这里是reject的回调函数
  console.log(err)
})

