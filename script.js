const calculatorScreen = document.querySelector(".calculator-screen");

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

let prevNumber = "";
let calculationOperation = "";
let currentNumber = "0";

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

const inputOperator = (operator) => {
  if (calculationOperation === "") {
    prevNumber = currentNumber;
  }
  calculationOperation = operator;
  currentNumber = "0";
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const calculate = () => {
  let result = "";
  switch (calculationOperation) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = prevNumber - currentNumber;
      break;
    case "*":
      result = prevNumber * currentNumber;
      break;
    case "/":
      result = prevNumber / currentNumber;
      break;
    case "%":
      result = prevNumber % currentNumber;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperation = "";
};

const clearBtn = document.querySelector(".all-clear");

const clearAll = () => {
  prevNumber = "";
  calculationOperation = "";
  currentNumber = "0";
};

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inverseNumber = () => {
  if (calculatorScreen.value === "0") {
    return;
  }
  calculatorScreen.value *= -1;
  currentNumber *= -1;
};

const negative = document.querySelector(".negative");

negative.addEventListener("click", () => {
  inverseNumber();
});

hapus = () => {
  if (currentNumber === "0") {
    return;
  } else if (currentNumber.length === 1) {
    currentNumber = "0";
  } else {
    currentNumber = currentNumber.substring(0, currentNumber.length - 1);
  }
};

const deleteBtn = document.querySelector(".delete");

deleteBtn.addEventListener("click", () => {
  hapus();
  updateScreen(currentNumber);
});
