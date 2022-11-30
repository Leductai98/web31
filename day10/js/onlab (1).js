/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */
function printOddNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
      console.log(i + " là số lẻ");
    }
  }
}
printOddNumbers();

/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log(i + " là số chẵn");
    }
  }
}
console.log(" ");
printEvenNumbers();

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {
  let tong = 0;
  for (let i = 1; i <= n; i++) {
    tong = tong + i;
  }
  console.log(tong);
}
sumOfNumbers(10);

/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {
  let total = 0;
  for (let i = start; i <= end; i++) {
    if (i % 2 != 0) {
      total = total + i;
    }
  }
  console.log(total);
}
sumOfOddNumbers(1, 12);

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (number % i == 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(divisor(129));
console.log(divisor(100));
console.log(divisor(169));
/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {
  thickness = thickness * 1000;
  let count = 0;
  let x = 0.1;
  while (x < thickness) {
    x = x * 2;
    count++;
  }
  console.log(count);
}
countFolding(100);
/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */

/*function countYears(dad, son) {
  var year = 0;
  while (dad != 2 * son) {
    dad++;
    son++;
    year++;
  }
  console.log(year);
}

countYears(30, 5);*/

//Tính số chân gà và chó
//Vừa gà vừa chó
//Bó lại cho tròn
//36 con
//100 chân chẵn
function countLegs() {
  let dog;

  for (dog = 1; dog <= 36; dog++) {
    let chicken = 36 - dog;
    let leg = 4 * dog + 2 * chicken;
    if (leg === 100) {
      console.log(dog);
      console.log(chicken);
      break;
    }
  }
}
countLegs();
