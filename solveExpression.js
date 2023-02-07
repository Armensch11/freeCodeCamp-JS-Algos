function solveIt(exp){
  let testArr=exp.split(/[+ - * = ]/);
  let mult,add,subtr=false;
  
  if(exp.indexOf("+")>-1){
    add=true;
  }
  if(exp.indexOf("-")>-1){
    subtr=true;
  }
  if(exp.indexOf("*")>-1){
    mult=true;
  }

  console.log(testArr)
}
function replaceSign(str,sign){
  let generateArr=[];
  for (let i=0;i<=9;i++){
    let newStr=str.replaceAll(sign,i);
    generateArr.push(newStr);
  }
  return generateArr;
}
solveIt('123*45?=5?088')