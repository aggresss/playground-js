#!/usr/bin/env node

makePromise1()
  .then(function(value){
    console.log(value);
    return makePromise2();
  })
  .then(function(value){
    console.log(value);
    return makePromise3();
  })
  .then(function(value){
    console.log(value);
  });

function makePromise1(){
  var p = new Promise(function(resolve, reject){
    //异步操作
    setTimeout(function(){
      console.log('异步任务1');
      resolve('异步任务1传过来的值');
    }, 1000);
  });
  return p;
}
function makePromise2(){
  var p = new Promise(function(resolve, reject){
    //异步操作
    setTimeout(function(){
      console.log('异步任务2');
      resolve('异步任务2传过来的值');
    }, 1000);
  });
  return p;
}
function makePromise3(){
  var p = new Promise(function(resolve, reject){
    //异步操作
    setTimeout(function(){
      console.log('异步任务3');
      resolve('异步任务3传过来的值');
    }, 1000);
  });
  return p;
}

