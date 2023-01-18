function generateMutations(k, arr, finalArr = []) {
  if (k === 1) {
    //console.log(arr.join(""));
    finalArr.push(arr.join(""));
    return;
  } else {
    for (let i = 0; i < k; i++) {
      generateMutations(k - 1, arr, finalArr);
      if (k % 2 === 0) {
        [arr[i], arr[k - 1]] = [arr[k - 1], arr[i]];
      } else {
        [arr[0], arr[k - 1]] = [arr[k - 1], arr[0]];
      }
    }
  }
}
function noRepeats(str){
  for(let i=0;i<str.length-1;i++){
    if(str[i]===str[i+1]){
      return false
    }
  }
  return true;
}
function countNotRepeating(str) {
  const allCombinations = [];
  let arr=str.split("");
  generateMutations(arr.length, arr, allCombinations);
  //console.log(allCombinations);

  let counter=0;
  allCombinations.forEach(el=>{if(noRepeats(el)){counter++;}});
  console.log(counter);
  return counter;
}


countNotRepeating("abfdefa");

