const adv = document.querySelector(".adv");
// const body = document.querySelector("body");
const books = document.querySelector(".books");
const bookList = document.querySelectorAll(".book");
const book2List = bookList[0].querySelectorAll("li");
const book5List = bookList[5].querySelectorAll("li");
const book6List = bookList[2].querySelectorAll("li");

console.log(bookList);
console.log(book6List);

books.prepend(bookList[1]);
books.append(bookList[2]);
bookList[4].after(bookList[3]); //1 пункт

document.body.style.backgroundImage = "url(image/you-dont-know-js.jpg)"; // 2 пункт

bookList[4].querySelector("h2 a").textContent =
  "Книга 3. this и Прототипы Объектов"; // 3 пункт

adv.remove(); // 4 пункт

book2List[9].after(book2List[2]);
book2List[9].before(book2List[7]);
book2List[8].after(book2List[4], book2List[5]);

book5List[10].before(book5List[5], book5List[8]);
book5List[1].after(book5List[9]);
book5List[4].after(book5List[2]); //5 пункт

book6List[8].after(
  (document.createElement("li").textContent = "Глава 8: За пределами ES6")
); // 6 пункт
