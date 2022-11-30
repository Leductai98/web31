/**
 * Tìm số lớn nhất trong 2 số
 *
 * @param {number} a Số thứ 1
 * @param {number} b Số thứ 2
 *
 * @return {number} Số lớn nhất
 */
function maxOfTwo(a, b) {
  if (a >= b) return a;
  else return b;
}
console.log(maxOfTwo(3, 4));

/**
 * Kiểm tra một số là số chẵn hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isEven(number) {
  if (number % 2 === 0) return true;
  else return false;
}
console.log(isEven(29));

/**
 * Kiểm tra một số nguyên có chia hết cho 3 và 5 hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isDivisibleByThreeAndFive(number) {
  if (number % 3 === 0 && number % 5 == 0) return true;
  else return false;
}
console.log(isDivisibleByThreeAndFive(30));

/**
 * Tính tiền hoa hồng mà đại lý nhận được
 *
 * - Nếu totalSales <= 100 triệu thì hoa hồng nhận là 5% doanh số
 * - Nếu totalSales <= 300 triệu thì hoa hồng nhận là 10% doanh số
 * - Nếu totalSales > 300 triệu thì hoa hồng nhận là 20% doanh số
 *
 *
 * @param {number} totalSalse Doanh số bán hàng
 *
 * @return {number} Hoa hồng trả cho đại lý
 */
function calcCommissions(totalSalse) {
  if (totalSalse > 300) return (20 / 100) * totalSalse;
  else if (totalSalse <= 300 && totalSalse > 100)
    return (10 / 100) * totalSalse;
  else return (5 / 100) * totalSalse;
}
console.log(calcCommissions(10));

/**
 * Kiểm tra 1 ký tự có phải thuộc bảng chữ cái hay không (a-zA-Z)
 *
 * @param {string} character Ký tự bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isAlphabe(character) {
  if (
    (character >= "a" && character <= "z") ||
    (character >= "A" && character <= "Z")
  )
    return true;
  else return false;
}
console.log(isAlphabe("c"));

/**
 * Kiểm tra 1 chữ cái bất kỳ có phải là nguyên âm hay không?
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isVowel(character) {
  /* switch (character) {
    case "o":
    case "O":
    case "u":
    case "U":
    case "i":
    case "I":
    case "a":
    case "A":
    case "e":
    case "E":
      console.log(character + " là nguyên âm");
      break;
    default:
      console.log(character + " không là nguyên âm");
      break;
  }*/
  if (
    character === "o" ||
    character === "O" ||
    character === "u" ||
    character === "U" ||
    character === "i" ||
    character === "I" ||
    character === "a" ||
    character === "A" ||
    character === "e" ||
    character === "E"
  ) {
    console.log(character + " là nguyên âm");
  } else {
    console.log(character + " không là nguyên âm");
  }
}

isVowel("c");
/**
 * Kiểm tra một chữ cái bất kỳ là viết hoa hay viết thường
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean}
 */

function isUppercase(character) {
  if (character >= "a" && character <= "z") {
    console.log(character + " là chũ viết thường");
  } else if (character >= "A" && character <= "Z") {
    console.log(character + " là chũ viết hoa");
  } else {
    console.log(character + " không phải là chữ cái");
  }
}
isUppercase(55);
isUppercase("b");
isUppercase("C");

/**
 * Kiểm tra độ dài 3 cạnh bất kỳ có tạo thành một tam giác hợp lệ hay không?
 *
 * Tam giác hợp lệ là tam giác có tổng 2 cạnh bất kỳ lớn hơn cạnh còn lại
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {boolean} Kết quả
 */
function isValidTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log(`${a}, ${b}, ${c}  tạo thành 1 tam giác`);
  } else {
    console.log(`${a}, ${b}, ${c} không tạo thành 1 tam giác`);
  }
}
isValidTriangle(3, 5, 20);
isValidTriangle(3, 5, 6);
/**
 * Viết chương trình máy tính đơn giản
 *
 * @param {number} operand1 Toán hạng 1
 * @param {'+' | '-' | '*' | '/'} operator Toán tử
 * @param {number} operand2 Toán hạng 3
 *
 * @return {number} Kết quả phép tính
 */
function simpleCalculator(operand1, operator, operand2) {
  let result;
  switch (operator) {
    case "+":
      result = operand1 + operand2;
      console.log(result);
      break;
    case "-":
      result = operand1 - operand2;
      console.log(result);
      break;
    case "*":
      result = operand1 * operand2;
      console.log(result);
      break;
    case "/":
      result = operand1 / operand2;
      console.log(result);
      break;
  }
}
simpleCalculator(5, "-", 7);
simpleCalculator(5, "+", 7);
simpleCalculator(5, "*", 7);
simpleCalculator(5, "/", 7);
