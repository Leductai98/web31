/**
 * Tìm số nhỏ nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Sổ nhỏ nhất trong mảng
 */
let x = [2, 3, 56, 74, 80, 224, 300, 668, 80, 3];
let y = [3, 5, 6, 7, 8, 80, 56, 12, 13];
function min(arr) {
  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }
  return result;
}
console.log(min(x));
console.log("\n");
/**
 * Tìm số lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn nhất trong mảng
 */
function max(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}
console.log(max(x));
console.log("\n");
/**
 * Tìm số nhỏ nhất và lớn nhất trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {[number, number]} Mảng chứa giá trị nhỏ nhất và lớn nhất
 */

function minMax(arr) {
  let y = [];
  let result = max(arr);
  let result1 = min(arr);
  y.push(result, result1);
  return y;
}
console.log(minMax(x));
console.log("\n");

/**
 * Đổi chỗ vị trí của 2 phần tử bất kỳ trong mảng (x và y)
 *
 * Lưu ý mảng sau khi gọi phải thay đổi
 *
 * @param {number[]} arr Mảng số bất kỳ
 * @param {number} x Index 1
 * @param {number} y Index 2
 */
function swap(arr, x, y) {
  let result = arr[x];
  let result1 = arr[y];
  arr.splice(x, 1, result1);
  arr.splice(y, 1, result);
  return arr;
}
console.log(swap(x, 3, 5));
console.log("\n");

/**
 * Tìm các số xuất hiện trong cả 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number[]} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số xuất hiện trong cả 2 mảng
 */
function intersection(arr1, arr2) {
  let result = [];
  for (i = 0; i < arr1.length; i++) {
    /*for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }*/
    if (arr2.includes(arrr1[i])) {
      result.push(arr1[i]);
    }
  }
  for (i = 0; i < result.length; i++) {
    for (j = i + 1; j < result.length; j++) {
      if (result[i] === result[j]) {
        result.splice(j, 1);
      }
    }
  }
  return result;
}
console.log(intersection(x, y));
console.log("\n");
/**
 * Tìm các số riêng biệt chỉ xuất hiện ở 1 trong 2 mảng
 *
 * @param {number[]} arr1 Mảng số bất kỳ
 * @param {number} arr2 Mảng số bất kỳ
 *
 * @return {number[]} Mảng chứa các số chỉ xuất hiện ở 1 trong 2 mảng
 */
function difference(arr1, arr2) {
  let result = [];
  for (i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) == 0) {
      result.push(arr1[i]);
    }
  }
  for (i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i]) == 0) {
      result.push(arr2[i]);
    }
  }
  return result;
}
console.log(difference(x, y));
console.log("\n");

/**
 * Loại bỏ các số trùng lặp trong mảng, chỉ giữ lại các số duy nhất
 *
 * Lưu ý: Thay đổi trực tiếp mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 */
function removeDuplicate(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
}
console.log(removeDuplicate(x));
console.log("\n");
/**
 * Tìm số lớn thứ 2 trong mảng
 *
 * @param {number[]} arr Mảng số bất kỳ
 *
 * @return {number} Số lớn thứ 2 trong mảng
 */
function secondLargest(arr) {
  let max1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max1 = arr[i];
    }
  }
  let max2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max1 && arr[i] > max2) {
      max2 = arr[i];
    }
  }
  return max2;
}
console.log(secondLargest(x));
console.log("\n");
/**
 * Xáo trộn vị trí các phần tử trong một mảng
 *
 * @param {any[]} arr Mảng bất kỳ
 *
 * @return {arr} Mảng bị xáo trộn
 */
console.log(x);
function shuffle(arr) {
  for (i = 0; i < arr.length / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}
console.log(shuffle(x));

/**
 * @typedef {object} student
 * @property {number} id - Mã định danh
 * @property {string} firstname - Họ
 * @property {string} lastname - Tên
 * @property {string} gender - Giới tính
 * @property {number} point - Điểm tổng kết
 */

/**
 * @typedef {object} studentWithFullname
 */

/**function fullname(students){}
 *
 * @param {student[]} students - Danh sách sinh viên
 *
 * @return {student[]}
 */
function fullname(students) {
  let result = students.keys();
}
