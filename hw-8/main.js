//1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
console.log('Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….). ')
let res = '';
for (let i = 20; i <= 30; i+= 0.5) {
  res += i + ' ';
}
console.log(res);

// //2. Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
console.log('Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.')
let res = 27;
for (let i = 10; i <= 100; i+= 10) {
console.log(i*res);
}
 

// //3. Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
console.log('Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.');
let n = ''; 
for (let i = 1; i <= 100; i++) {
if (  i**2 <= n) {  
console.log(i);
}
}

// //   4. Дане ціле число. Визначити, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
console.log('Дане ціле число. Визначити , чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).');
let number = '';

for(i = 2; i <= number; i++){
  if(number % i == 0) break;
}

if( number == i ) console.log('це просте число');
else console.log('це не просте число');

// //5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
console.log('Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).');
let number = '9';
while (number % 3 == 0) {
  number /= 3;
}
console.log((number == 1)? 'Число можно получить ' : 'Число нельзя получить');



 

