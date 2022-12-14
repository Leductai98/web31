const heading = "Thầy giáo Ba đẹp trai 🤓";
const avatar =
  "https://static.wikia.nocookie.net/eldenring/images/7/7a/ER_Godfrey.png";
const profile = "https://twitter.com/banx9x";
document.querySelector("title").innerText =
  document.querySelector(".heading").innerText;
document.querySelector("h1").innerText =
  document.querySelector(".heading").innerText;
document.querySelector("img").src = avatar;
document.querySelector("a").href = profile;
document.querySelector("ul").firstElementChild.innerText = `Code application`;
document.querySelector("ul").lastElementChild.innerText = `Sleep`;

let date = new Date();
let second = date.getSeconds();
let minute = date.getMinutes();
let hour = date.getHours();
let day1 = date.getDay();
let day2 = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

document.querySelector(
  "div"
).innerText = `Bây giờ là ${hour}:${minute}:${second}, ${day1} ${day2}/${month}/${year}`;

let arr = document.querySelector("p.bio").innerText.toLowerCase().split(" ");

let baArr = arr.filter(function (item) {
  if (item === "ba") return item;
});
let length = baArr.length;
document.querySelector(
  `p.num-of-words`
).innerText = `Ở đoạn văn trên có ${length} từ 'Ba'`;

let newRow = document
  .querySelector("table")
  .insertRow(0)
  .insertCell(0)
  .appendChild(document.createTextNode("Thầy giáo Ba siêu cấp đẹp trai"));

console.log(document.querySelector("li"));
