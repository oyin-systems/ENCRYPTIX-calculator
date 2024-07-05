let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = null;

function appendNumber(number) {
  if (number === "." && currentInput.includes(".")) return;
  currentInput += number;
  updateDisplay();
}

function setOperator(op) {
  if (currentInput === "") return;

  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else if (operator) {
    calculate();
  } else {
    firstOperand = parseFloat(currentInput);
  }
  operator = op;
  currentInput = "";
}

function calculate() {
  if (operator === "" || currentInput === "") return;

  let secondOperand = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    case "%":
      result = firstOperand % secondOperand;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  firstOperand = result;
  operator = "";
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  firstOperand = null;
  operator = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput || "0";
}
