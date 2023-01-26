let firstCharacter = function (str) {
  return str.slice(0, 1);
};

// Returns the last character of a string str
let lastCharacter = function (str) {
  return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
let middleCharacters = function (str) {
  return str.slice(1, -1);
};

function isPalindrome(str) {
  if (str.length < 2) {
    return true;
  }

  console.log(str);
  if (str[0] === str[str.length - 1]) {
    isPalindrome(str.slice(1, -1));
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("a55qwwwq55a"));
