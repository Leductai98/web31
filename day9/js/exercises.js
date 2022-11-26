/**
 * Tính chu vi hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Chu vi hình chữ nhật
 */
function findPerimeterOfRectangle(length, breadth) {
  let result = (length + breadth) * 2;
  console.log("Chu vi hình chữ nhật = " + result);
  return result;
}
findPerimeterOfRectangle(7, 8);

/**
 * Tính diện tích hình chữ nhật
 *
 * @param {number} length Chiều dài hình chữ nhật
 * @param {number} breadth Chiều rộng hình chữ nhật
 *
 * @return {number} Diện tích hình chữ nhật
 */
function findAreaOfRectangle(length, breadth) {
  let result = length * breadth;
  console.log("Diện tích hình chữ nhật = " + result);
  return result;
}
findAreaOfRectangle(5, 6);
/**
 * Tìm đường kính hình tròn
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Đường kính hình tròn
 */
function findDiameterOfCircle(r) {
  let d = r * 2;
  console.log("Đường kính hình tròn = " + d);
}
findDiameterOfCircle(20);

/**
 * Tìm chu vi hình tròn
 *
 * Quy ước PI = 3.14
 *
 * @param {number} r Bán hình hình tròn
 *
 * @return {number} Chu vi hình tròn
 */
function findCircumferenceOfCircle(r) {
  let p = 2 * 3.14 * r;
  console.log("Chu vi hình tròn = " + p);
  return p;
}
findCircumferenceOfCircle(30);

/**
 * Tìm diện tích hình tròn
 *
 * Quy ước PI = 3.14
 *
 * Bình phương sử dụng toán tử ** hoặc Math.pow()
 *
 * @param {number} r Bán kính hình tròn
 *
 * @return {number} Diện tích hình tròn
 */
function findAreaOfCircle(r) {
  let s = 3.14 * Math.pow(r, 2);
  console.log("Diên tích hình tròn = " + s);
  return s;
}
findAreaOfCircle(16);

/**
 * Tính diện tích hình tam giác theo công thức Heron
 *
 * Link tham khảo công thức Heron: https://vi.wikipedia.org/wiki/C%C3%B4ng_th%E1%BB%A9c_Heron
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {number} Diện tích hình tam giác
 */
function findAreaOfTriangle(a, b, c) {
  let p = (a + b + c) / 2;
  let ps = p * (p - a) * (p - b) * (p - c);
  let s = Math.sqrt(ps);
  console.log("Diện tích tam giác = " + s);
  return s;
}
findAreaOfTriangle(5, 6, 7);

/**
 * Chuyển đổi nhiệt ở ở thang nhiệt Celsius sang Fahrenheit
 *
 * Tham khảo công thức chuyển đổi trên google
 *
 * @param {number} temp Nhiệt độ ở thang nhiệt Celsius
 *
 * @return {number} Nhiệt độ ở thang nhiệt Fahrenheit
 */
function celsiusToFahrenheit(temp) {
  let f = temp * 1.8 + 32;
  console.log("Độ F = " + f);
  return f;
}
celsiusToFahrenheit(45);
