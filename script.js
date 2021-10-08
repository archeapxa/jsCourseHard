const button = document.querySelector("#btn");
const input = document.querySelector("#text");
const range = document.querySelector("#range");
const square = document.querySelector("#square");
const circle = document.querySelector("#circle");
const circleButton = document.querySelector("#e_btn");

const changeColor = function () {
  let color = input.value;
  square.style.backgroundColor = color;
};

const changeRad = function (e) {
  let val = e.target.value;
  circle.style.height = val + "%";
  circle.style.width = val + "%";
};

button.addEventListener("click", changeColor);
// 1

circleButton.style.display = "none";
// 2

range.addEventListener("input", changeRad);
// 3
