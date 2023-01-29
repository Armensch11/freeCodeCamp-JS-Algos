function factorial(n){
  if(n===0){
    return 1
  } else {return n*factorial(n-1)}

}
function fib(nth){
  const fibArr=[0,1];
  while(fibArr.length<=nth){
    fibArr.push(fibArr[fibArr.length-1]+fibArr[fibArr.length-2])
  }
  return fibArr[fibArr.length-1];
}
function checkPrime(n){
  for (let i=2;i<Math.sqrt(n);i++){
    if(n%i===0){
      return false;
    }
  }
  return true
}


function debounce(func, delay=3000){
  let timer;
  return function(){
    let context=this;
    clearTimeout(timer);
    timer=setTimeout(()=>func.apply(context),delay);
    
  }
}
const myRun=()=>{
  console.log("I am running")
}
//debounce(myRun)();
function something(){
  console.log(this);
  this.value=3;
  console.log(this)
}
let check=new something()
console.log(typeof check)




