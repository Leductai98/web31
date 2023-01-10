const btn = document.getElementById("btn");
const image = document.getElementById("image");
const select = document.getElementById("breed-list");
let ul = document.querySelector("ul");
let option = document.getElementsByTagName("option");

async function getBreedList() {
  let res = await axios.get("https://dog.ceo/api/breeds/list/all");

  renderBreed(res.data.message);

  btn.addEventListener("click", function () {
    let arr = Object.keys(res.data.message);
    let arr2 = Object.values(res.data.message);
    for (let i = 0; i < arr.length; i++) {
      if (select.value == arr[i]) {
        if (arr2[i].length == 0) {
          ul.innerHTML = `<li>Không có sub breed</li>`;
        } else {
          let arr3 = arr2[i]
            .map(function (item) {
              return `<li onclick="renderImg()"><a>${item}</a></li>`;
            })
            .join("");
          ul.innerHTML = arr3;
        }
      }
    }
    let li = document.getElementsByName("li");
  });
}

function renderBreed(breeds) {
  let arr = Object.keys(breeds);

  let arr2 = arr
    .map(function (item) {
      return ` <option value=${item}>${item}</option>`;
    })
    .join("");
  select.innerHTML = `${arr2}`;
  console.log(select.value);
}
getBreedList();

async function renderImg() {
  let res = await axios.get("https://dog.ceo/api/breeds/list/all");
  let arr = Object.keys(res.data.message);
  let arr2 = Object.values(res.data.message);
  let res2 = await axios.get(
    "https://dog.ceo/api/breed/hound/afghan/images/random"
  );
  image.src = res2.data.message;
  console.log(image.src);
}
