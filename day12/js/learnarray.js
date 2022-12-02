function myFunction(param) {
  param();
}

function myCallback(value = 10) {
  console.log("Value", value);
}

myFunction(myCallback);
