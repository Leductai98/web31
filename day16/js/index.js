let l1 = "LVIII";
let l2 = [5, 6, 4];
function toInteger(roman) {
  switch (roman) {
    case "I":
      return 1;
      break;
    case "V":
      return 5;
      break;
    case "X":
      return 10;
      break;
    case "L":
      return 50;
      break;
    case "C":
      return 100;
      break;
    case "D":
      return 500;
      break;
    case "M":
      return 1000;
      break;
    default:
      return 0;
  }
}
var romanToInt = function (s) {
  let total = 0;
  let lengths = s.length;
  for (let i = 0; i < lengths; i++) {
    let roman = s[i];

    let romanAfter = s[i + 1];
    total += toInteger(roman);
    console.log(total);
    switch (romanAfter) {
      case "V":
      case "X":
        if (roman === "I") {
          total += -toInteger(roman);
        }
        break;
      case "L":
      case "C":
        if (roman === "X") {
          total += -toInteger(roman);
        }
        break;
      case "D":
      case "M":
        if (roman === "C") {
          total += -toInteger(roman);
        }
        break;
      default:
        total += toInteger(roman);
    }
  }
};
romanToInt(l1);

let strs = ["flower", "flow", "flight"];
console.log(strs[0][1]);

var longestCommonPrefix = function (strs) {
  let count = 0;
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < strs[0].length; j++) {
      if (strs[i].includes(strs[0][j])) count++;
      else count --;
    }
  }
  if (count === strs.length - 1) return true;
  else return false;
};

let s = "()";

var isValid = function (s) {
  let arr = [];
  for (let i = 0; i < s.length; i + 2) {
    if (s[i] === s[i + 1]) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }
  console.log(arr);
  if (arr.includes(false)) return false;
  else return true;
};

console.log(isValid(s));
