document.createElement("li").textContent = "Глава 8: За пределами ES6";

const button = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");

button.onclick = function () {
  let newItem = document.createElement("li");
  newItem.textContent = input.value;
  list.insertAdjacentElement("beforeend", newItem);
};
