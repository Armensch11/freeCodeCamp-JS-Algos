function binarySearch(searchList, value){
  let arrayPath=[];
  let start=0,end=searchList.length-1;
  while(start<=end){
    let middle=Math.floor((start+end)/2);
    arrayPath.push(searchList[middle]);
    if(searchList[middle]>value){
      end=middle-1;
    }
    if(searchList[middle]<value){
      start=middle+1;
    }
    if(searchList[middle]===value){
     
      return arrayPath;
    }
  }
  return "Value Not Found"
}

const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
let res=binarySearch(testArray,70);
console.log(res);