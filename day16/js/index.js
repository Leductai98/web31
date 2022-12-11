let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
var addTwoNumbers = function (l1, l2) {
  let l1Number = Number(l1.reverse().join(""));
  console.log(l1Number);
  let l2Number = Number(l2.reverse().join(""));
  console.log(l2Number);
  let l3 = l1Number + l2Number;
  return l3.toString().split("").reverse().map(Number);
};

console.log(addTwoNumbers(l1, l2));
