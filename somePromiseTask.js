

const myPromise= new Promise((resolve,reject)=>reject(new Error("some problem")));
myPromise.then(()=>console.log("we are lucky"));
