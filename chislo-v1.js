//[1,2,4,5,6,9], 13
function findSums(arr, number) {
  let combinationsArr=[];
  let baseArr=arr.splice(-2,Infinity);
  let tempArr=[baseArr];
  for (let i=0;i<baseArr.length;i++){
    tempArr.push([baseArr[i]]);
    //console.log(tempArr);
  }
  combinationsArr.push(...tempArr);
  while(arr.length){
    tempArr=[];
    let arrForComb=arr.splice(-1,Infinity);
    tempArr.push([arrForComb[0]]);
    for(let i=0;i<combinationsArr.length;i++){
      tempArr.push([arrForComb[0],...combinationsArr[i]])
    }
    combinationsArr.push(...tempArr);
  }
  
  let arrOfSums = combinationsArr.filter((arr) => {
    let sum = arr.reduce((acc, el) => acc + el);
    return sum === number;
  });
  console.log(combinationsArr);
  console.log(arrOfSums);

  return arrOfSums;
  
}
// findSums([7, 8, 3, 4, 5, 6, 1, 2], 8);
function doAthing(x=3,y){
  return [x,y];

}
const res=doAthing(2);
console.log(res);
