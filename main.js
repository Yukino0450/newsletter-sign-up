let firstPage = document.getElementById("first-page");
let secondPage = document.getElementById("second-page");
let mainBackground = document.getElementById("main");

function submit() {
  let inputEl = document.getElementById("input-el").value;
  const error = document.getElementById("error");
  if (inputEl == "") {
    error.textContent = "Valid email required!";
  } else {
    let address = document.getElementById("address");
    address.textContent = inputEl;
    firstPage.classList.add("hidden");
    secondPage.classList.remove("hidden");
    mainBackground.style.width = "27vw"; //大２ページ目
    mainBackground.style.height = "65vh";
  }
}

function clickedButton() {
  firstPage.classList.remove("hidden");
  secondPage.classList.add("hidden");
  let inputEl = document.getElementById("input-el");
  inputEl.value = ""; //to make the input field value of the first page clear when back to the first page

  const error = document.getElementById("error");
  error.textContent = ""; //to make the erroe message of p tag clear when back to the first page

  mainBackground.style.width = "57vw"; //大1ページ目
  mainBackground.style.height = "70vh";
}

//１ページ目
// if (window.matchMedia("(max-width: 1440px)").matches) {
//   mainBackground.style.width = "57vw";
//   mainBackground.style.height = "70vh";
// } else if (window.matchMedia("(min-width:375px)").matches) {
//   mainBackground.style.width = "80vw";
// }

//２ページ目
//   if (window.matchMedia("(max-width: 1440px)").matches) {
//     mainBackground.style.width = "27vw";
//     mainBackground.style.height = "65vh";
//   } else if (window.matchMedia("(min-width:375px)").matches) {
//     mainBackground.style.width = "80vw";
//   }

//・初期画面のボタン押したら起こること
//ページが２ページ目に変わる☑
//paragraphの中に、１ページ目で入力したメールアドレスが入っている。

//・ページの切り替わったあとに起こる動作
//dismiss　messageボタン押したら、始めのページに戻る
//→１ページ目のhiddenを削除し、２ページ目にhiddenを追加

// function submit() {
//   let firstPage = document.getElementById("first-page");
//   firstPage.classList.add("hidden");

//   let secondPage = document.getElementById("second-page");
//   secondPage.classList.remove("hidden");

//   let inputEl = document.getElementById("input-el").value;
//   let address = (document.getElementById("address").textContent = inputEl);

//   document.getElementById("secondBtn").addEventListener("click", function () {
//     firstPage.classList.remove("hidden");
//     secondPage.classList.add("hidden");
//   });
// }
