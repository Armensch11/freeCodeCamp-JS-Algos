function isInDictionary(strArr) {
  let originalLength = strArr[0].length;
  let comb = possibleCombinations(strArr[1].split(","), originalLength);
  let final = comb.filter((el) => el[0] + el[1] === strArr[0]);

  return final.length ? final[0][0]+", "+final[0][1] : "not possible";
}
function possibleCombinations(wordsArr, searchLength) {
  let combArr = [];
  for (let i = 0; i < wordsArr.length; i++) {
    let tempArr = [...wordsArr];
    tempArr.splice(i, 1);
    for (let j = 0; j < tempArr.length; j++) {
      let tempWord = wordsArr[i] + tempArr[j];
      //console.log(tempWord);
      if (tempWord.length === searchLength) {
        combArr.push([wordsArr[i], tempArr[j]]);
      }
    }
  }
  //console.log(combArr);
  return combArr;
}
let res = isInDictionary(["abcgefd", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]);
console.log(res);
