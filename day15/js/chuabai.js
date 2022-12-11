//Chữa bài
function countElement1(arr) {
  let result = {};

  for (let value of arr) {
    let key = String(value).toLowerCase();

    if (key in result) {
      result[key] += 1;
    } else {
      result[key] = 1;
    }
  }
  return result;
}


/*Chữa bài*/

function isPalindrome1(str) {
  const normalStr = str.toLowerCase().replaceAll(" ", "");

  return normalStr === normalStr.split("").reverse().join("");
}

console.log(isPalindrome1("abcD cBa"));

function calcTime1(time, n) {
  let timeArr = time.split(":").map(Number);
  let s = timeArr[2] + n;
  let m = Math.floor(s / 60);

  if (m === 0) return timeArr.join(":");
}