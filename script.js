let num = 266219; // начальная переменная

let numbers = num.toString().split('').map(Number); 
// переход переменной в текст, разделение каждого символа текста в массив, преобразование элементов массива в число

let output = numbers.reduce((t , a) => t * a); // умножение через reduce 

console.log(output); // вывод итогов умножения
  
let outputExponent = output ** 3; // возведение в третью степерь

console.log(String(outputExponent).substr(0 , 2)); //преобразую в текст, обрезаю два знака