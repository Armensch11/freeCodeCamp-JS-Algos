function pairwise(arr, arg) {
  let indexesArr=[];
  for (let i=0;i<arr.length;i++){
    for (let j=i+1;j<arr.length;j++){
      if(arr[i]+arr[j]===arg){
        if(!indexesArr.includes(i)&&!indexesArr.includes(j)){
          indexesArr.push(i,j);
          console.log(indexesArr)
        }
      }
    }
  }
  return console.log(indexesArr.reduce((sum,el)=>sum+el,0));
}

pairwise([1,4,2,3,0,5], 7);