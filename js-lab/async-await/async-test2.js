// https://segmentfault.com/a/1190000016788484

const setDelay = (millisecond) => {
  return new Promise((resolve, reject)=>{
      if (typeof millisecond != 'number') reject(new Error('参数必须是number类型'));
      setTimeout(()=> {
        resolve(`我延迟了${millisecond}毫秒后输出的`)
      }, millisecond)
  })
}
const setDelaySecond = (seconds) => {
  return new Promise((resolve, reject)=>{
      if (typeof seconds != 'number' || seconds > 10) reject(new Error('参数必须是number类型，并且小于等于10'));
      setTimeout(()=> {
        resolve(`我延迟了${seconds}秒后输出的，注意单位是秒`)
      }, seconds * 1000)
  })
}

setDelay(1000)
.then(result=>{
    console.log(result);
    return setDelaySecond(2)
})
.then(result=>{
    console.log(result);
    return setDelay(1000)
})
.then(result=>{
    console.log(result);
    console.log('完成')
})
.catch(err=>{
    console.log(err);
})

(async ()=>{
  const result = await setDelay(1000);
  console.log(result);
  console.log(await setDelaySecond(2));
  console.log(await setDelay(1000));
  console.log('完成了');
})()


