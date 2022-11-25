function greeting(name) {
  console.log("Hello" + name);
  console.log("Welcome");
}
greeting("tai"); //name ="tai"

function add(a, b) {
  let add = a + b;
  console.log("Tổng = " + add);
}
add(5, 6);

function sub(a, b) {
  let sub = a - b;
  console.log("Thương = " + sub);
}
sub(80, 90);

function mul(a, b) {
  let mul = a * b;
  console.log("Tích = " + mul);
}
mul(99, 154);

function div(a, b) {
  let ketqua = a / b;
  console.log(`{a}-{b}={ketqua}`);
}
div(65, 43);

const curentYear = 2022;

function calcAge(yearOfBirth) {
  let age = curentYear - yearOfBirth;
  console.log("Tuổi = " + age);
}
calcAge(1998);

do{console.log("nhap vao");}
