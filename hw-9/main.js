console.log('Створити масив, довжину та елементи якого задає користувач. Наприклад, перерахуйте кольори веселки');
const arr = ['red', 'orange','green', 'light blue', 'blue', 'violet' ];
console.log(arr);
console.log('Відсортувати масив за зростанням.');
arr.sort();
console.log(arr);
console.log('Видалити елементи з масиву з 2 по 4 (включно!).На майбутнє будемо вважати, що елемент перший, другий, сьомий і т.д. це порядковий номер, а не на індекс. Щоб отримати індекс робимо -1.');
arr.splice(1,3);
console.log(arr);
