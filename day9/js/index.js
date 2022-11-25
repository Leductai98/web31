//Hiển thị kết quả/ thông báo ra console
console.log("xin chào, đây là thông báo");

//Hiển thị lỗi trong console
console.log(abc);

//9 loại giá trị
//number:số

1;
1.5;
Infinity;
-Infinity;
NaN;

//string: tập hợp các ký tự đặt trong dấu '',"", => biểu diễn các đoạn văn bản
("Xin chào");
'Đây cũng là một chuỗi';

//boolean: Biểu diễn giá trị logic đúng hoặc sai
true;
false;

//empty: Dữ liệu trống
null; //Không có dữ liệu
undefined; //Dữ liệu chưa xác định

//bigInt: biểu diễn các số cực lớn (number có giới hạn số lớn nhất là 2^(53-1) và nhỏ nhất là -2^(53-1))

//symbol

//Kiểu nguyên thủy(primitive)

//object => Bao gồm tập hợp dữ liệu
//Bao gồm tập hợp các key: value (properties)
{
    name: "Tai",
    age: 24,
}

//function => tập hợp các câu lệnh được đóng gói lại, cho phép tái sử dụng
function hello(){
    console.log("Xin chào");
}



//Toán tử

//Số học
1+1;
1/1;//Số nguyên hoặc số thực
2%3;//Chia lấy phần tư =>2
11%4;//2
13*4;//52

//Toán tử so sánh
1<2;//true

//Toán tử  3 ngôi -ternary
//Sử dụng để gán giá trị theo một điều kiện cụ thể
//Nếu điều kiện đúng thì nhận giá trị v1
//Nếu điều kiện sai thì nhận giá trị v2

//3 dạng toán tử:
//-Unary(toán tử đơn)
//-Binary(toán tử đôi)
//-Tenary(toán tử ba ngôi)
// - Số học (+-*/%**)
// - So sánh (== === > < >= <= != !==)
// - Gán ()
// - Logic (kiểm tra nhiều điều kiện)


//Javascrip tự động chuyển kiểu dữ liệu trong bất kỳ phép tính nào, tuy nhiên việc tự thì có thể tạo ra kết quả sai
//Sử dụng các hàm chuyển đổi sẽ cho kết quả chính xác như mong muốn
String()
Number(); //Lưu ý các trường hợp đặc biệt
Boolean();//5 giá trị "", 0, false, null, undefined




//Biến: Là tên của một giá trị
//Các cú pháp khai báo
var x;
let y;
const z;
//Quy tắc đặt tên biến:
//-Tên biến nó không được phép trùng với tên có sẵn trong JavaScript
//-Không được chứa ký tự đặc biệt (chỉ chấp nhận 2 ký tự đặc biệt là $ và _)
//-Không bắt đầu bằng số

//Quy ước:
//-Sử dụng format camelCase
//firstName
//lastName
//myName
//-Sử dụng tên có ý nghĩa
//-Các biến mà chứa giá trị logic thì nên bắt đầu bằng:
is, has, ..
//isValid, hasValidName,


function functionName(parameters) {
    //code
}

//Từ khóa khai báo: Function
//functionName: tên hàm
//(parameters): các tham số truyền vào hàm
//{}: thân hàm chứa các câu lệnh bên trong hàm

//Để gọi hàm
//tên hàm()
//có thể truyền vào các arguments => parameters
//involve
