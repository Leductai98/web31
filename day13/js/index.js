let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

// In arr ra console
console.log(arr);
// In ra độ dài (số lượng phần tử) của arr
console.log(arr.length);
// In ra phần tử thứ 3 trong mảng
console.log(arr[2]);
// In ra phần tử đầu tiên trong mảng
console.log(arr[0]);
// In ra phần tử cuối cùng của mảng
console.log(arr[arr.length - 1]);
// In ra phần tử có index = -1, chú ý kết quả
console.log(arr[-1]);
// Sử dụng vòng lặp in ra từng giá trị trong arr
for (let value of arr) {
  console.log(value);
}
// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng của giá trị đó trong arr
// Ví dụ:
// Index: 0, Value: 10
// Index: 1, Value: 20
// ...
let Index = 0;
for (i = 0; i < arr.length; i++) {
  let Value = arr[Index];
  console.log("Index:", Index, "Value:", Value);
  Index++;
}
console.log("\n");
// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr theo chiều ngược lại (từ cuối mảng)
for (i = arr.length - 1; i >= 0; i--) {
  let Index = i;
  let Value = arr[Index];
  console.log(`Index: ${Index}  Value:${Value}`);
}
console.log("\n");
// Thêm "Ba"  cuối mảng sử dụng phương thức push()
arr.push("Ba");
console.log(arr);
console.log("\n");
// Thêm "Thảo" vào cuối mảng mà KHÔNG SỬ DỤNG phương thức push()
arr[arr.length] = "Thảo";
console.log(arr);
console.log("\n");
// Thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()
arr.unshift("Béo Ú");
console.log(arr);
console.log("\n");
// Xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop() và in ra giá trị đó
console.log(arr.pop());
console.log("\n");
// Xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift() va in ra giá trị đó
console.log(arr.shift());
console.log("\n");
// Sao chép 2 phần tử đầu tiên sử dụng phương thức slice() và in ra kết quả
console.log(arr.slice(0, 2));
console.log("\n");
// Sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()
f = arr.slice();
console.log(f);
console.log("\n");
// Sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()
f1 = arr.slice(arr.length - 3, arr.length);
console.log(f1);
console.log("\n");
// Xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng sử dụng phương thức splice()
arr.splice(1, 2);
console.log(arr);
console.log("\n");
// Thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3 sử dụng phương thức splice()
arr.splice(1, 0, "Nhi", "Hùng");
console.log(arr);
console.log("\n");
// Tìm và in ra chỉ mục của "Ba" ra console sử dụng phương thức indexOf()
console.log(arr.indexOf("Ba"));
console.log("\n");
// Tìm và in ra chỉ mục của "Thảo" ra console, chú ý kết quả
console.log(arr.indexOf("Thảo"));
console.log("\n");
// Kiểm tra "Mai Anh" có trong mảng arr hay không sử dụng phương thức includes() và in ra kết quả
console.log(arr.includes("Mai Anh"));
console.log("\n");
// Sử dụng alert() in arr, chú ý kết quả

// Nối các tên trong mảng thành một chuỗi sử dụng phương thức join() và in ra console
console.log(arr.join());
console.log("\n");
// Đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse() và in ra kết quả
arr.reverse();
console.log(arr);
console.log("\n");
// Đổi chỗ 2 phần tử đầu và cuối mảng
f2 = arr.shift();
console.log(f2);

f3 = arr.pop();
console.log(f3);
arr.push(f2);
arr.unshift(f3);
console.log(arr);
console.log("\n");
// Xóa toàn bộ phần tử trong mảng
arr.splice(0, arr.length);
console.log(arr);
console.log("\n");
/**
 * Tính tổng các số trong một mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Tổng các số trong mảng
 */
let x = [20, 33, 55, 55, 168, 159, 975];
function sum(nh) {
  let sum = 0;
  for (let i = 0; i < nh.length; i++) {
    sum += nh[i];
  }
  return sum;
}
console.log(sum(x));
console.log("\n");
/**
 * Tính trung bình cộng các số trong mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Trung bình cộng các số trong mảng
 */
function avg(numbers) {
  let result = sum(numbers) / numbers.length;
  return result;
}
console.log(avg(x));
console.log("\n");
