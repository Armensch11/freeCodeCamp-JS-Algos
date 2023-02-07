//Graph Challenge
// Have the function GraphChallenge(strArr) read strArr which will be an array of hyphenated
//letters representing paths between those two nodes. For example: ["a-b","b-c","b-d"]
// means that there is a path from node a to b (and b to a), b to c, and b to d.
//Your program should determine the longest path that exists in the graph and
//return the length of that path. So for the example above, your program
// should return 2 because of the paths a-b-c and d-b-c.
//The path a-b-c also means that there is a path c-b-a.
//No cycles will exist in the graph and every node will be connected to some other
//node in the graph.

// Examples
// Input: ["b-e","b-c","c-d","a-b","e-f"]
// Output: 4
// Input: ["b-a","c-e","b-c","d-c"]
// Output: 3
function graphChallenge(strArr, i = 0, subArr = []) {
  let checkArr = [...strArr];
  if (!subArr.length) {
    subArr = strArr[0].split("-");
    checkArr.splice(i, 1);
  }

  checkArr.forEach((el, index) => {
    if (el.indexOf(subArr[0]) > -1) {
      subArr.push(el);
      graphChallenge(checkArr.splice(index, 1), index, subArr);
    } else if (el.indexOf(subArr[1]) > -1) {
      subArr.push(el);
      graphChallenge(checkArr.splice(index, 1), index, subArr);
    } else{return}
  });
  return console.log(subArr);
}
graphChallenge(["a-b", "b-e", "b-c", "c-d"]);
