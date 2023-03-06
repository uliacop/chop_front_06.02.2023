// Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функцію pow (num, degree).

'use strict';
function pow (num, degree) {
    if (degree === 0) {
        return 1;
    } else {
   const res = num * pow (num, degree - 1)
    return res   
}
}
console.log (pow(2,8));
