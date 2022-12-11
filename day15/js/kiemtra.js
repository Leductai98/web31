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

/*Chữa bài
//Bước 1: Tách các giá trị giờ phút giây
//Bước 2: Cộng số giây với n
//Bước 3: Chia tổng số giây cho 60 lấy số phút
//Bước 4: Kiểm tra:
//- Nếu số phút ==0 thì tăng số giây, ghép chuỗi kết quả và trả về
//- Nếu số phút>0, lặp lại quy trình tính số phút, ...giờ
*/

/* Cách làm
 * Bước 1: Khai báo biến result để giữ kết quả tính toán
 * Bước 2: Sử dụng hàm if để đặt điều kiện tính giá điện
 * Bước 3: Đặt công thức tính giá điện trong các hàm if
 * Bước 4: Trả về biến cost
 */
function calcTime(time, n) {
  let result =
    Number(time[0]) * 10 * 3600 +
    Number(time[1]) * 3600 +
    Number(time[3]) * 10 * 60 +
    Number(time[4]) * 60 +
    Number(time[6]) * 10 +
    Number(time[7]) +
    n;
  let hours = Math.floor(result / 3600);
  console.log(hours);
  let mininutes = Math.floor((result % 3600) / 60);
  let seconds = result - hours * 3600 - mininutes * 60;
  if (hours > 23) {
    hours = hours - 23;
  }

  return `${String(hours).padStart(2, 0)}:${String(mininutes).padStart(
    2,
    0
  )}:${String(seconds).padStart(2, 0)}`;
}
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
 * Bước 3: Sử dụng hàm filter để xóa khoảng trắng trong chuỗi và gán vào biến result1
 * Bước 4: Sử dụng hàm join để để biến mảng result1 thành chuỗi và gán vào biến result2
 * Bước 5: Sử dụng hàm reverse() để đảo ngước mảng result1 và gán vào biến reverseResult
 * Bước 6: Sử dụng hàm join để biến mảng reverseResult thành chuỗi và gán vào biến reverseResult1
 * Bước 7: So sánh 2 chuỗi result2 và reverseResult
 * Bước 8: Trả về kêt quả true hoặc false
 */
function isPalindrome(str) {
  let str1 = str.toLowerCase();
  let result = str1.split("");
  let result1 = result.filter(function (a) {
    if (a === " ") return "";
    else return a;
  });

  let result2 = result1.join("");
  let reverseResult = result1.reverse();
  let reverseResult1 = reverseResult.join("");
  if (result2 === reverseResult1) return true;
  else return false;
}

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
    let i = 0;
    while ((x - y) * i + x < h) {
      i++;
      if ((x - y) * i + x > h) {
        i++;
      }
    }
    return i;
  }
}

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
    if (arr1.includes(item)) return false;
    else return true;
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

/**
 * Object chứa thông tin về sinh viên
 *
 * @typedef {Object} Student
 * @property {number} id - ID duy nhất của sinh viên
 * @property {string} name - Tên sinh viên
 * @property {string} dateOfBirth - Ngày sinh
 * @property {number} grade - Điểm tốt nghiệp
 */
/**
* Sắp xếp danh sách sinh viên dựa theo:
* - Điểm tốt nghiệp theo thứ tự giảm dần
* - Nếu sinh viên có điểm tốt nghiệp bằng nhau thì sắp xếp theo thứ tự
ngày sinh tăng dần
* - Nếu ngày sinh cũng giống nhau thì sắp xếp theo tên (bảng chữ cái)
*
* Kết quả trả về phải là một mảng mới, không thay đổi mảng cũ
*
* @param {Student[]} students - Mảng chứa thông tin sinh viên
*
* @return {Student[]} Danh sách sinh viên sau khi sắp xếp
*
* @example
* let students = [
* { id: 1, name: "Ba Nguyễn", dateOfBirth: '1992-05-24', point: 10.0
},
* { id: 2, name: "Tuấn Anh", dateOfBirth: '1993-10-29', point: 4.5 },
* { id: 3, name: "Tuấn Vũ", dateOfBirth: '1996-03-13', point: 8.2 },
* { id: 4, name: "Minh Vân", dateOfBirth: '1996-03-31', point: 7.0 },
* { id: 5, name: "Phương Thảo", dateOfBirth: '1999-05-15', point: 9.0
},
* { id: 6, name: "Mai Anh", dateOfBirth: '1994-08-22', point: 4.5 },
* { id: 7, name: "Thanh Hà", dateOfBirth: '1996-03-31', point: 7.0 },* { id: 8, name: "Hoàng Linh", dateOfBirth: '1991-07-01', point: 7.2
},
* { id: 9, name: "Lan Nhi", dateOfBirth: '1990-09-10', point: 5.5 },
* ]
*
* sortStudents(students);
*
* // Kết quả
* [
* // sắp xếp theo điểm
* { id: 1, name: "Ba Nguyễn", dateOfBirth: '1992-05-24', point: 10.0
},
* { id: 5, name: "Phương Thảo", dateOfBirth: '1999-05-15', point: 9.0
},
* { id: 3, name: "Tuấn Vũ", dateOfBirth: '1996-03-13', point: 8.2 },
* { id: 8, name: "Hoàng Linh", dateOfBirth: '1991-07-01', point: 7.2
},
* // điểm bằng nhau, sắp xếp theo ngày sinh
* { id: 7, name: "Thanh Hà", dateOfBirth: '1996-02-16', point: 7.0 },
* { id: 4, name: "Minh Vân", dateOfBirth: '1993-03-31', point: 7.0 },
* // sắp xếp theo điểm
* { id: 9, name: "Lan Nhi", dateOfBirth: '1990-09-10', point: 5.5 },
* // điểm bằng nhau, ngày sinh giống nhau, sắp xếp theo tên
* { id: 6, name: "Mai Anh", dateOfBirth: '1996-03-31', point: 4.5 },
* { id: 2, name: "Tuấn Anh", dateOfBirth: '1996-03-31', point: 4.5 },
* ]
*/

let students = [
  { id: 1, name: "Ba Nguyễn", dateOfBirth: "1992-05-24", point: 10.0 },
  { id: 2, name: "Tuấn Anh", dateOfBirth: "1993-10-29", point: 4.5 },
  { id: 3, name: "Tuấn Vũ", dateOfBirth: "1996-03-13", point: 8.2 },
  { id: 4, name: "Minh Vân", dateOfBirth: "1996-03-31", point: 7.0 },
  { id: 5, name: "Phương Thảo", dateOfBirth: "1999-05-15", point: 9.0 },
  { id: 6, name: "Mai Anh", dateOfBirth: "1993-10-29", point: 4.5 },
  { id: 7, name: "Thanh Hà", dateOfBirth: "1996-02-16", point: 7.0 },
  { id: 8, name: "Hoàng Linh", dateOfBirth: "1991-07-01", point: 7.2 },
  { id: 9, name: "Lan Nhi", dateOfBirth: "1990-09-10", point: 5.5 },
];

/* Cách làm
 * Bước 1: Sử dung biến arr = để sao chép lại mảng students
 * Bước 2: Sử dụng vòng lặp for để tìm được vị trí có giá trị lớn nhất
 *  Gán vị trí có giá trị lớn nhất vào vị trí đầu tiên i=0
 *  Sau đó ở dụng vòng lặp for với biến j để lặp qua mảng arr bắt đầu từ vị trí i+1
 *    Nếu point vị trí i = vị trí j thì sẽ xét đến ngày sinh, nếu ngày sinh của vị trí j > vị trí i thì viTriLonNhat = j
 *    Nếu ngày sinh vẫn = nhau thì xét đến tên, tên ở vị trí j > i thì viTriLonNhat=j
 *    Nếu point vị trí j > vị trí i thì viTriLonNhat= j;
 * Bước 3: Sau khi tìm được vị trí lớn nhất, đổi chỗ giá trị của vị trí i trong mảng arr với giá trị của vị trí lớn nhất
 * Bước 4: Trả về mảng arr
 */

function sortStudents(students) {
  let arr = students;
  for (let i = 0; i < arr.length; i++) {
    let viTriLonNhat = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].point == arr[viTriLonNhat].point) {
        if (
          new Date(arr[j].dateOfBirth).getDate() >
          new Date(arr[viTriLonNhat].dateOfBirth).getDate()
        ) {
          viTriLonNhat = j;
        } else if (
          new Date(arr[j].dateOfBirth).getDate() ==
          new Date(arr[viTriLonNhat].dateOfBirth).getDate()
        ) {
          if (arr[j].name.localeCompare(arr[viTriLonNhat].name) == -1) {
            viTriLonNhat = j;
          }
        }
      } else if (arr[j].point > arr[viTriLonNhat].point) {
        viTriLonNhat = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[viTriLonNhat];
    arr[viTriLonNhat] = temp;
  }
  return arr;
}

