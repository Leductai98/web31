//sort
//filter
//find
//findIndex
//map
//redice
//....

//Callback
//Một hàm (giá trị hàm) được truyền vào một hàm khác dưới dạng đối số

function demo() {
  return 1;
}

demo; //giá trị hàm
demo(); //cuộc gọi hàm

console.log(demo());

function doSomething(callback) {
  const data = 10;
}

doSomething(demo); //demo=callback

//khai báo trực tiếp hàm tại vị trí sử dụng

let other = function () {};

doSomething(123);
doSomething(other);
doSomething(function () {});

////////////////

let arr = [1, 3, 5, 6, 77, 5];
//forEach - làm một cái gì đố với mỗi phần tử trong mảng
function pow(n) {
  console.log(n ** 2);
}
for (let i = 0; i < arr.length; i++) {
  pow(arr[i]);
}

arr.forEach(pow);

const arr1 = ["Ba", "Phong", "Minh", "Tài"];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

arr1.forEach(console.log);

//find - tìm ra giá trị đầu tiên khớp với điều kiện
const arr2 = [10, 15, 12, 11, 9, 19, 17];

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }

  return true;
}

let firstPrime;

for (let i = 0; i < arr2.length; i++) {
  if (isPrime(arr2[i])) {
    firstPrime = arr2[i];
    break;
  }
}

console.log(firstPrime);

let fPrime = arr2.find(isPrime);
console.log(fPrime);

//filter - Tìm tất cả giá trị khớp với điều kiện
let arr3 = [];

for (let i = 0; i < arr2.length; i++) {
  if (isPrime(arr2[i])) {
    arr3.push(arr[i]);
  }
}

console.log(arr3);

let result = arr2.filter(isPrime);
console.log(result);

//findIndex - Tìm chỉ mục của giá trị đầu tiên khớp với điều kiện
let index;

for (let i = 0; i < arr2.length; i++) {
  if (isPrime(arr2[i])) {
    index = i;
    break;
  }
}
console.log(index);

let index1 = arr2.findIndex(isPrime);
console.log(index1);

//map - biến đổi các phần tử trong mảng thành một giá trị khác

function double(n) {
  return n * n;
}

//Biến đổi các số trong mảng thành double
let arr4 = [];
for (let i = 0; i < arr2.length; i++) {
  let x = double(arr2[i]);
  arr4.push(x);
}

console.log(arr4);

let result4 = arr2.map(double);
console.log(result4);

//reduce-Tính tổng
let sum = 0;

for (let i = 0; i < arr2.length; i++) {
  sum += arr2[i];
}

console.log(sum);

function add(a, b) {
  return a + b;
}

let total = arr2.reduce(add, 0);

console.log(total);

//sort - sắp xếp
//sort - mặc định sắp xếp theo dạng chuỗi
let x = [10, 100, 5, 1, 50, 500];
x.sort();
console.log(x);

function compare(a, b) {
  //số dương (1) nếu a lớn hơn b
  //số âm (-1) nếu a nhỏ hơn b
  if (a >= b) return 1;
  else return -1;
}

x.sort(compare);
console.log(x);
