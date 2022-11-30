//Đánh giá điều kiện chạy câu lệnh nếu đúng
//Nếu sai không làm gì cả
if (condition) {
}

//Chạy 1 trong 2 khối lệnh tùy thuộc vào điều kiện
if (condition) {
} else {
}

//Kiểm tra lần lượt từng điều kiện
if (condition) {
} else if (otherCondition) {
} else if (aotherCondition) {
} else {
}

//Kiểm tra nhiều điều kiện phụ thuộc lẫn nhau
if ((condition && otherCondition) || subCondition) {
}

const color = "white";

switch (color) {
  case "while":
    console.log("tôi cũng thích màu trắng");
    break;
  default:
    console.log("không phải màu trắng");
}
