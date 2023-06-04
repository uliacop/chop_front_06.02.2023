import { addNumber, substractNumber, divideNumber, multiplyNumber } from "./calculator.js";

let result = document.getElementById("result");
let button = document.getElementById("button");
let reset = document.getElementById("reset");
let calculate = document.getElementById("calculate");
calculate.addEventListener("click", () => {
  const operation = document.getElementById("operation").value;
  const first = parseInt(document.getElementById("first").value);
  const second = parseInt(document.getElementById("second").value);

    if (operation === "+") {
    let r = addNumber(first, second);
    result.value =  r;
  } else if (operation === "-") {
    let r = substractNumber(first, second);
    result.value = r;
  } else if (operation === "*") {
    let r = multiplyNumber(first, second);
    result.value = r;
  } else if (operation === "/") {
    let r = divideNumber(first, second);
    result.value = r;
  }
});

reset.addEventListener("click", () => {
  result.value = "";
  document.getElementById("first").value = "";
  document.getElementById("second").value = "";
  document.getElementById("operation").value = "";
});
