function test(x) {
  if (x < 10) {
    console.log("x<10");
  } else if (x > 10) {
    console.log("x>10");
  } else {
    console.log("x=10");
  }
}

test(10);

var x = 1;
while (x < 10) {
  console.log("Gia tri cua x nho hon 10");
  x++;
}

var y;
var text;

function hoTen(y) {
  switch (y) {
    case "tai":
      text = "Le"

      break;

    case "thanh":
      console.log("Nguyen Van Toan Thanh");

      break;
    default:
      console.log("Sai");
      break;
  }
}
hoTen(t);
