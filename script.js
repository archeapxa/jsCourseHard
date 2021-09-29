"use strict";
/*
let num = 266219; // начальная переменная

let numbers = num.toString().split('').map(Number); 
// переход переменной в текст, разделение каждого символа текста в массив, преобразование элементов массива в число

let output = numbers.reduce((t , a) => t * a); // умножение через reduce 

console.log(output); // вывод итогов умножения
  
let outputExponent = output ** 3; // возведение в третью степерь

console.log(String(outputExponent).substr(0 , 2)); //преобразую в текст, обрезаю два знака
*/
/*
//первое задание
let days = {
  ru: "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье",
  en: "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday",
};

let lang = prompt("Введите ключ");

// first
if (lang === "ru") {
  console.log(days.ru);
} else {
  console.log(days.en);
}
// second
switch (lang) {
  case "ru":
    console.log(days.ru);
    break;
  default:
    console.log(days.en);
    break;
}
//third
console.log(days[lang]);

//второе задание
let namePerson = prompt("Имя?");
namePerson === "Артем"
  ? console.log("Директор")
  : namePerson === "Максим"
  ? console.log("Преподаватель")
  : "Студент";
*/
/*
const check = function (str) {
  if (typeof str !== "string") {
    alert("Введен не текст!");
  } else {
    let strTrimmed = str.trim();
    if (strTrimmed.length > 30) {
      return strTrimmed.slice(0, 29) + "...";
    } else {
      return strTrimmed;
    }
  }
};

console.log(check(prompt("Введите строку")));
*/
/*
// первое задание
const arr = [123, 2352, 2432, 745, 4213, 546, 72];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i];
  if (
    element.toString().charAt(0) === "2" ||
    element.toString().charAt(0) === "4"
  ) {
    console.log(element);
  }
}

//второе задание
for (let index = 1; index <= 100; index++) {
  let whole = true;
  for (let num = 2; num < index; num++) {
    if (index % num == 0) {
      whole = false;
      break;
    }
  }
  if (whole) console.log(index, "Делители этого числа: 1 и ", index);
}
*/

// let date = new Date();
// let today = date.getDay() - 1;
// let body = document.querySelector("body");
// console.log(today);

// let days = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ];

// let todayDay = days.findIndex;

// days.forEach((element, index) => {
//   if (element === "Суббота" || element === "Воскресенье") {
//     if (index === days.findIndex) document.write(`<p><b>${element}</b></p>`);
//   } else {
//     document.write(`<p>${element}</p>`);
//   }
// });

// days.forEach((element, index) => {
//   if (element === "Суббота" || element === "Воскресенье") {
//     if (index === today - 1 || index === today + 6) {
//       console.log("%c" + element, "font-weight:bold");
//     } else {
//       console.log("%c" + element, "font-style: italic");
//     }
//   } else {
//     if (index === today - 1) {
//       console.log("%c" + element, "font-weight:bold");
//     } else {
//       console.log(element);
//     }
//   }
// });

// // Вариант №2
// let week = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
//   toDay = new Date().getDay() - 1;

// for (let i = 0; i < week.length; i++) {
//   if (i == toDay) {
//     if (week[i] == "сб" || week[i] == "вс") {
//       document.write(`<p><b><i>${week[i]}</i></b></p>`);
//     } else {
//       document.write(`<p><b>${week[i]}</b></p>`);
//     }
//   } else if (week[i] == "сб" || week[i] == "вс") {
//     document.write(`<p><b>${week[i]}</b></p>`);
//   } else {
//     document.write(`<p>${week[i]}</p>`);
//   }
// }
// console.log(toDay);

// let main = document.querySelector("body");

// let week = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ];

// let date = new Date().getDay();

// week.forEach(function (item, index) {
//   if (index === date) {
//     if (item === "Суббота" || item === "Воскресенье") {
//       main.innerHTML += item.italics().bold() + "<br>";
//     } else {
//       main.innerHTML += item.bold() + "<br>";
//     }
//   } else if (item === "Суббота" || item === "Воскресенье") {
//     main.innerHTML += item.italics() + "<br>";
//   } else {
//     main.innerHTML += item + "<br>";
//   }
// });

const days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timezone: "Europe/Kiev",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

let now = new Date();

function getNoun(number, one, two, five) {
  let n = number % 20;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n = number % 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
}

console.log(
  "Сегодня " +
    days[now.getDay()] +
    ", " +
    now.getDate() +
    " " +
    months[now.getMonth()] +
    " " +
    now.getFullYear() +
    " года, " +
    now.getHours() +
    getNoun(now.getHours, " час", " часа", " часов") +
    " " +
    now.getMinutes() +
    getNoun(now.getMinutes, " минута", " минуты", " минут") +
    " " +
    now.getSeconds() +
    getNoun(now.getSeconds, " секунда", " секунды", " секунд")
);

// console.log(getNoun(31, " секунда", " секунды", " секунд"));
