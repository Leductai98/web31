function Weapon(type, dame, speed) {
  this.type = type;
  this.dame = dame;
  this.speed = speed;
}

function Character(name, level, weapon) {
  this.name = name;
  this.level = level;
  this.weapon = weapon;
  this.attack = function () {
    console.log("Tấn công");
  };
  this.changeWeapon = function () {
    console.log("Đổi vũ khí");
  };
}

const w1 = new Weapon(1, 30, 50);
const c1 = new Character("A", 3, w1);

console.log(w1);
console.log(c1.attack());
