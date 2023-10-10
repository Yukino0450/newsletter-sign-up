let firstPage = document.getElementById("first-page");
let secondPage = document.getElementById("second-page");
let mainBackground = document.getElementById("main");

// function submit() {
//   let inputEl = document.getElementById("input-el").value;
//   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   const error = document.getElementById("error");
//   if (inputEl == "" || inputEl == emailPattern) {
//     error.textContent = "Valid email required!";
//   } else {
//     let address = document.getElementById("address");
//     address.textContent = inputEl;

//     firstPage.classList.add("hidden");
//     secondPage.classList.remove("hidden");
//     mainBackground.style.width = "27vw"; //大２ページ目
//     mainBackground.style.height = "65vh";
//   }
// }

function submit() {
  let inputEl = document.getElementById("input-el").value;
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const error = document.getElementById("error");
  console.log(regex.test(inputEl));
  if (!regex.test(inputEl)) {
    error.textContent = "Valid email required!";
  } else {
    console.log("passed");
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
