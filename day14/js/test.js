x = [1, 2, 3, 4, 5, 6, 7, 8];

var arr = [];

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr[arr.length] = i;
        arr[arr.length] = j;
        break;
      }
    }
  }
  return arr;
};
console.log(twoSum(x, 9));

const x = new ()