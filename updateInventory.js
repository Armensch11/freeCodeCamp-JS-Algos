function updateInventory(arr1, arr2) {
  const collection1 = {};
  arr1.forEach((el) => (collection1[el[1]] = el[0]));
  arr2.forEach((el) => {
    //   if (collection1[el[1]]){
    //   collection1[el[1]]+=el[0];
    // }else{collection1[el[1]]=el[0]}
    collection1[el[1]]
      ? (collection1[el[1]] += el[0])
      : (collection1[el[1]] = el[0]);
  });
  arr1 = Object.keys(collection1).sort();

  arr1 = arr1.map((el, i, arr) => (arr[i] = [collection1[el], el]));

  // console.log(arr1);
  return arr1;
}
updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [63, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);
// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

//updateInventory(curInv, newInv);
// [21, "Bowling Ball"],
// [2, "Dirty Sock"],
//  [1, "Hair Pin"],
//   [5, "Microphone"],
//    [[2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//      [67, "Bowling Ball"],
//       [7, "Toothpaste"]]
//       //retrun
//      [[88, "Bowling Ball"],
//       [2, "Dirty Sock"],
//        [3, "Hair Pin"],
//         [3, "Half-Eaten Apple"],
//          [5, "Microphone"],
//           [7, "Toothpaste"]];
