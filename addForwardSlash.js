let str =
  "<div>dadada<a>dads</a><div>dada<divokok>da<p>rererere</p><div><div>adadad<div>";

function divIdentifier(str) {
  const pattern = "<div>";
  let count = 0;
  let divIndexes=[];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "<" && str.length - i >= 4) {
      let sub = str.substring(i, i + 5);
      if (sub === pattern) {
        count++;
        divIndexes.push(i);
      }
    }
  }
  let finalStr="";
  let placeHolder=Math.ceil(divIndexes.length/2);
  for(let i=0;i<str.length;i++){
   
    finalStr+=str[i];
    if(i===divIndexes[placeHolder]&&placeHolder<divIndexes.length){
      finalStr+="/";
      placeHolder++;
    }
  }
  return finalStr;
}

let check = divIdentifier(str);
console.log(check);
