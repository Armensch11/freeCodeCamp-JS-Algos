function swap(arr,first, second){
  [arr[first],arr[second]]=[arr[second],arr[first]];
}
function partitionArray(arr, left, right){
  let pivotIndex=right;
  let q=left;
  for(let j=left;j<right;j++){
    if(arr[j]<=arr[pivotIndex]){
      swap(arr,j,q);
      q++;
      }
    }
    swap(arr,right,q);

  console.log(arr);
  return q;
};
function quickSort(arr,left=0,right=arr.length-1){
 if(left<right){ 
  let shift=partitionArray(arr, left, right);
  quickSort(arr,left,shift-1);
  quickSort(arr,shift+1,right);}
return arr;
}
let arr=[2,8,16,3,-3,1,4,0,7,12,-4,-1,10,43,9];
quickSort(arr);