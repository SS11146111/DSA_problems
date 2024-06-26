async function sleep(millis) {
    const promise1 = await  new Promise((resolve, reject) => {setTimeout(() => {resolve(2)},  millis);});
 }
 
  
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100