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
