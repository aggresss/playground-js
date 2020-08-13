async function a() {
  let a1 = await new Promise(function(resolve, reject) {
      const num = 5;
      resolve(num)
  });
  let a2 = await new Promise(function(resolve,reject){
     console.log(a1)
     resolve(a1)
  });

  let a3 = await a2
  console.log(a3)
}

a()
