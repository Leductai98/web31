/**
 * Tính số tiền điện theo công thức tính giá điện bậc thang như sau:
 * - Từ kWh thứ 0 đến 50: 1678đ/kWh
 * - Từ kWh thứ 51 - 100: 1734đ/kWh
 * - Từ kWh thứ 101 - 200: 2014đ/kWh
 * - Từ kWh thứ 201 - 300: 2536đ/kWh
 * - Từ kWh thứ 301 - 400: 2834đ/kWh
 * - Từ kWh thứ 401 trở đi: 2927đ/kWh
 *
 * @param {number} kwh - Số điện đã dùng trong tháng
 *
 * @return {number} Tiền điện phải trả
 *
 * @example
 * bill(100); // 170600
 */

/* Cách làm
 * Bước 1: Khai báo biến cost để giữ kết quả
 * Bước 2: Sử dụng hàm if để đặt điều kiện tính giá điện
 * Bước 3: Đặt công thức tính giá điện trong các hàm if
 * Bước 4: Trả về biến cost
 */
function bill(kwh) {
  let cost;
  if (kwh > 401) {
    cost =
      50 * 1678 +
      50 * 1734 +
      100 * 2014 +
      100 * 2536 +
      100 * 2834 +
      (kwh - 400) * 2827;
  } else if (kwh > 301 && kwh <= 400) {
    cost = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834;
  } else if (kwh > 201 && kwh <= 300) {
    cost = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536;
  } else if (kwh > 101 && kwh <= 200) {
    cost = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
  } else if (kwh > 51 && kwh <= 100) {
    cost = 50 * 1678 + (kwh - 50) * 1734;
  } else if (kwh > 0 && kwh <= 50) {
    cost = kwh * 1678;
  } else return "Invalid";
  return cost;
}
console.log(bill(100));

/**
* Cho một chuỗi time biểu thị thời gian dạng giờ:phút:giây (VD:
'20:15:45'), và một số n bất kỳ, tính và trả về kết quả là một chuỗi
biểu thị thời gian tương ứng sau n giây*
* @param {string} time - Chuỗi biểu thị thời gian
* @param {number} n - Số giây cần thêm (bớt)
*
* @return {string} Kết quả
*
* @example
* calcTime('20:15:45', 15); // '20:16:00'
* calcTime('20:15:45', -46); // '20:14:59'
*/
function calcTime(time, n) {}

/**
* Kiểm tra một chuỗi có phải đối xứng hay không (viết xuôi hay viết
ngược đều giống nhau, không phân biệt chữ hoa chữ thường và không tính
dấu cách)
*
* @param {string} str - Chuỗi bất kỳ
*
* @return {boolean} Kết quả
*
* @example
* isPalindrome('Race car'); // true, vì Race car = racecar = racecar
*/

/* Cách làm
 * Bước 1: Khai báo biến srt1 để chuyển cả chuỗi về chữ cái viết thường
 * Bước 2: Sử dụng hàm split để biến chuỗi thành mảng và gán vào biến result
 * Bước 3: Sử dụng hàm for và if để xóa khoảng trắng trong mảng result
 * Bước 4: Sử dụng hàm reverse() để đảo ngước mảng result và gán vào biến reverseResult
 * Bước 5: So sánh 2 mảng result và reverseResult
 * Bước 6: Trả về kêt quả true hoặc false
 */
function isPalindrome(str) {
  let str1 = str.toLowerCase();
  let result = str1.split("");
  for (let i = 0; i < result.length; i++) {
    if (result[i] === " ") {
      result.splice(i, 1);
    }
  }
  let reverseResult = result.reverse();

  if (result === reverseResult) return true;
  else return false;
}
console.log(isPalindrome("Race car"));

/**
* Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo
được x mét, ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì
ốc sên sẽ leo lên tới miệng giếng
*
* @param {number} h - Chiều cao của giếng (h > 0)
* @param {number} x - Số mét leo được vào ban ngày (x > y)
* @param {number} y - Số mét bị tụt xuống vào ban đêm (y > 0)
*
* @return {number} Số ngày cần để ốc sên leo lên được miệng giếng*
* @example
* snail(10, 3, 1); // 5
*/

/* Cách làm
 * Bước 1: Khai báo biến day để giữ giá trị
 * Bước 2: Sử dụng hàm if else để loại những giá trị nhập vào sai và nhận những giá trị đúng
 * Bước 3: Nhập công thức tính toán vào hàm else
 * Bước 4: Trả về biến day
 */
function snail(h, x, y) {
  let day;
  if (x < y && Y < 0 && h < 0) return "Invalid";
  else {
    day = h / (x - y);
  }
  return day;
}
console.log(snail(10, 3, 1));

/**
* Sắp xếp các chữ số trong một số nguyên dương bất kỳ để tạo ra số nhỏ
nhất (giữ nguyên số chữ số ban đầu, bao gồm cả số 0)
*
* @param {number} n - Số nguyên dương bất kỳ
*
* @return {number} Số nhất nhất sau khi sắp xếp các chữ số
*
* @example
* sortNumber(5307510); // 1003557
*/

/* Cách làm
 * Bước 1: Khai báo biến srt để giữ giá trị n sang chuỗi
 * Bước 2: Khai báo biến arr1 để giữ giá trị str chuyển sang mảng
 * Bước 3: Khai báo biến arr2 để giữa giá trị arr1 sau khi sắp xếp
 * Bước 4: Trong hàm để sắp xếp: nếu ký tự a < b thì trả về -1 , ngược lại thì trả về 1
 *         để sắp xếp từ nhỏ tới lớn
 * Bước 5: Sử dụng vòng lặp for và câu điều kiện if để đổi vị trí nếu số đầu tiên trong mảng là 0
 * Bước 6: Trả về kết quả chuyển mảng thành chuỗi sau đó chuyển chuỗi thành số
 */
function sortNumber(n) {
  if (n < 0 && n % 2 !== 0) return "Invalid number";
  else {
    let str = n.toString();
    let arr1 = str.split("");
    let arr2 = arr1.sort(function (a, b) {
      if (a < b) return -1;
      else return 1;
    });
    for (let i = 1; i < arr2.length; i++) {
      if (arr2[0] == 0 && arr2[i] != 0) {
        let temp = arr2[0];
        arr2[0] = arr2[i];
        arr2[i] = temp;
        break;
      }
    }
    return Number(arr2.join(""));
  }
}
console.log(sortNumber(5307510));

/**
* Đếm số lần xuất hiện của mỗi phần tử trong mảng, nếu là chuỗi thì
không phân biệt chữ hoa chữ thường
*
* @param {any[]} arr - Mảng chứa giá trị bất kỳ
*
* @return {Record<string, number>} object chứa kết quả, với key là giá
trị trong mảng và value là số lần xuất hiện trong mảng
*
* @example
* let result = countElement([1, true, 1, 1, true]);
* console.log(result); // {1: 3, true: 2}
*
* @example
* let result = countElement(['Ba', 'Béo', 'Ba']);
* console.log(result); // {ba: 2, béo: 1}
*/

/* Cách làm
 * Bước 1: Sử dung vòng lặp for, hàm toString và toLowerCase để chuyển mảng thành mảng ký tự và không viết hoa
 * Bước 2: Khai báo đối tượng obj để giữ giá trị trả về
 * Bước 3: Khai báo biến arr1 để giữ các phần tử trong mang arr sau khi xóa các phần tử bị trùng
 * Bước 4: Sử dụng hàm filter , trong đó sử dụng if và hàm includes để tạo ra mảng mới mà các phần tử chỉ xuất hiện 1 lần
 * Bước 5: Sử dụng vòng lặp for để đếm số lần lặp lại của phần tử và đưa các giá trị và số lần xuất hiện vào đối tương obj
 * Bước 6: Trả về đối tượng obj
 */

function countElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString().toLowerCase();
  }
  var obj = {};
  let arr1 = [];
  arr1 = arr.filter(function (item) {
    if (arr1.includes(item)) return "";
    else return arr1.push(item);
  });
  console.log(arr1);
  for (let i = 0; i < arr1.length; i++) {
    let arr2 = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr1[i] == arr[j]) arr2.push(arr[j]);
    }
    obj[arr1[i]] = arr2.length;
  }
  return obj;
}
console.log(countElement([1, true, 1, 1, true]));
