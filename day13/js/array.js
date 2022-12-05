const fruits = ["Banana", "Orange", "Apple", "Mango"];
let found = fruits.filter(function (a) {
  return a.length > 5;
});
for (let x of fruits) {
  console.log(x);
}

console.log(found);

let j = fruits.join(2);
console.log(j);

fruits.push("Kiwi");
console.log(fruits);
fruits.unshift("Watermelon");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(3, 0, "Coconut");
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

let arr5 = fruits.slice(1, 3);
console.log(arr5);

const car = ["BMW", "KIA", "Mazda", "Toyota"];
console.log(car);

const number = [1, 2, 3, 4, 5, 6];

let arr1 = fruits.concat(car, number);
console.log(arr1);

let arr2 = number.map(function (x) {
  return Math.pow(x, 3);
});
console.log(arr2);

fruits.forEach(function (x) {
  console.log(x);
});
let arr = [1, 2, 3, 60, 60];
//Chuyển thành chuỗi
arr.toString(); //ghép với dấu ,
String(arr); //1,2,3
arr.join(); //mặc định là dấu ,
arr.join(""); //123
arr.join("-"); //1-2-3

//Thêm vào cuối
arr[3] = 40;
arr[arr.length] = 50;
arr[arr.length - 1];

arr.push(60, 70, 80);
arr.pop();

arr.shift();
arr.unshift(-10);

arr.slice(); //copy toàn bộ
arr.slice(3); //copy từ index 3 đến cuối
arr.slice(0, 5); //copy từ đầu đến index 4

console.log(arr);
//Tìm chỉ mục
let indexOf60 = arr.indexOf(60); //Chỉ mục
console.log(indexOf60);

let rIndexof60 = arr.lastIndexOf(60);
console.log(rIndexof60);

//nối mảng => tạo mảng mới
const newArray = arr.concat([-10, -20, -30]);
console.log(newArray);

console.log(arr.values());

arr.reverse; // đảo ngược thứ tự
console.log(arr);

//sort
//find
//filter
//reduce
