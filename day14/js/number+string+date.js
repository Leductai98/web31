let x = 15.855698;

console.log(x.toString(8));

x.toFixed(2);
console.log(x.toFixed(2));

//tạo số ngẫu nhiên trong khoảng
/*Math.floor(Math.random() * (max - min) + min); //0-1*/

console.log(Math.floor(Math.random() * (100 - 10) + 10));

let myName = "Ba Nguyễn";

//Có tính chất tương tự mảng
//
console.log(myName[0]);
console.log(myName.length);
console.log(myName.includes("a"));
console.log(myName.indexOf("a"));
console.log(myName.slice(0, 2));

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

console.log(myName.endsWith("n"));
console.log(myName.startsWith("d"));

console.log(myName.split(" "));

now = new Date();
console.log(now);
time = new Date("1998-12-5");

//print
time.toDateString();
time.toTimeString();

//get
time.getMonth(); //0-11
time.getDay(); //0-6

//set
//khi giá trị vượt quá giới hạn sẽ tự động cộng trừ(bù trừ) vào phần dư
time.setMonth();

console.log(myName.join(""));
