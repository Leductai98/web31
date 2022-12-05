// literal Object
/*keyword objectName ={
    // khai báo các thuộc tính

}*/

let phong = {
  name: "Hoàng Gia Phong",
  age: 18,
  gender: "Male",
  height: 1.7,
  weight: 54,
  isSingle: true,
  dad: {
    name: "Hoàng Minh Thắng",
    age: 45,
  },
  eat() {
    console.log("Ăn", food);
  },
};

let empty = {}; // Đối tượng rỗng

let car = {
  name: "BMW",
  color: "white",
  weight: 2,
  door: 5,
  seat: 5,
  fuel: 65,
  maxspeed: 215,
};

//Truy cập thông tin
//Dot notation - Cú pháp dấu chấm
//Tên đối tượng - Tên thuộc tính

car.name;
car.color;
car.maxspeed;
phong.eat("cơm");
console.log(phong);
console.log(console);
console.log(console.debug("Lỗi"));

//Thêm
empty.name = "Ba";
empty.age = 30;
empty.isHandsome = true;

//Sửa
empty.name = "Béo";
empty.age = 31;

//Xóa
delete empty.name;
delete empty.age;

empty.fun = function () {
  console.log("Một phương thức của empty");
};

//Duyệt qua các thuộc tính
for (let key in empty) {
  value = empty[key];

  console.log(key, value);
}

console.log("fun" in empty);
console.log("name" in empty);
