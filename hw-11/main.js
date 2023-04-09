//1.Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву
let ownArray = ['qwr', 'qwe', NaN, 'wqe', 'qwe', 'rew', 'ewtr', 'fbd', 'sdv', 3, 5, 3, 7, 5, 6, 1, 12, 0, 50, 'end'];
let count = 0;
console.log(ownArray.reduce((a, b) => {
  if (typeof b == "number" && !isNaN(b)) {
    ++count;
    return a += b;
  } else return a
}, 0) / count || 0);


//2.Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

//2.1. 1-й посіб введення даних:
// Введення через alert
// const x = prompt('Введите x');
// const y = prompt('Введите y');
// const znak = prompt('Введите знак');
// alert(doMath(x, znak, y))

// 2.2. 2-й спосіб введення даних
const x = +'4';
const y = +'-0.5';
const znak = '+';
console.log(doMath(x,znak, y));


function doMath(x, znak, y) {
switch (znak) {
  case "+":
  return x + y;
  case "-":
  return x - y;
   case "*":
  return x * y;
  case "/":
  return x / y;
   case "%":
   return x % y;
  case "^":
 return x ** y;
  default:
   console.log("Invalid operator");
  break;
}
}

//3.Написати функцію яка приймає массив чисел та повертає максимальне число в цьому масиві.

function findMax(arr) {
    if (arr.length ===0) {
        return null;
    }
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i];
        }
    }
    return maxNum;
}

const myArray = [12, 18, 8, 14, 12];
const maxNum = findMax(myArray);
console.log(maxNum);

//4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

  function removeChars(inputStr, charsToRemove) {
    let result = "";
    for (let i = 0; i < inputStr.length; i++) {
      if (!charsToRemove.includes(inputStr[i])) {
        result += inputStr[i];
      }
    }
    return result;
  }
  

  let inputStr = " hello world";
  let charsToRemove = ['l', 'd'];
  let resultStr = removeChars(inputStr, charsToRemove);
  console.log(resultStr); 
 
  


 