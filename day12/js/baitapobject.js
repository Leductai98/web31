let coordinates = {
  a: {
    x: 1,
    y: 2,
  },

  b: {
    x: 5,
    y: 8,
  },
};

function calcDistance() {
  let result = Math.sqrt(
    Math.pow(coordinates.a.x - coordinates.b.x, 2) +
      Math.pow(coordinates.a.y - coordinates.b.y, 2)
  );
  return result;
}
console.log(calcDistance());

let person = {
  name: "Ba",
  age: 30,
  speak() {
    //this - tham chiếu đến đối tượng gọi phương thức
    //this là đối tượng đang thực hiện hành vi
    //this chính là đối tượng ở trước dấu .
    console.log(
      "Xin chào mọi người",
      this.name,
      "năm nay tôi",
      this.age,
      "tuổi"
    );
  },
  toString() {
    return this.name;
  },
  valueOf() {
    return this.age;
  },
};

person.speak(); //this=person
person.age = 31;

let clone = person;
person = null;

clone.speak(); //this=clone

console.log(Number(clone));

let a = {
  value: 1,
};

let b = a;

b.value = 1000;

console.log(a);

//Contructor
function Cat(name, weight, color, age, breed) {
  this.name = name;
  this.weight = weight;
  this.color = color;
  this.age = age;
  this.breed = breed;
}

const cat1 = new Cat("Liasa", "3", "orange", "3", "Bristish");
const cat2 = new Cat("Emily", "2", "black", "2", "Mướp");

console.log(cat2);
