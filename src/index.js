import "./styles/style.sass";

import commandMemory from "./components/commands/commandMemory/commandMemory";
import commandGetValue from "./components/commands/commandGetValue/commandGetValue";
import commandDoOperation from "./components/commands/commandDoOperation/commandDoOperation";
import commandPushOperation from "./components/commands/commandPushOperation/commandPushOperation";

import Executer from "./components/executer/executer";

import getValue from "./components/calcMethods/getValue/getValue";
import pushOperation from "./components/calcMethods/pushOperation/pushOperation";
import findOperation from "./components/calcMethods/findOperation/findOperation";
import memoryOperation from "./components/calcMethods/memoryOperation/memoryOperation";
import displayValue from "./components/calcMethods/displayValue/displayValue";
import changeValues from "./components/calcMethods/changeValues/changeValues";

import xPowY from "./components/calcMethods/operations/xPowY/xPowY";
import root from "./components/calcMethods/operations/root/root";
import plus from "./components/calcMethods/operations/plus/plus";
import minus from "./components/calcMethods/operations/minus/minus";
import multiply from "./components/calcMethods/operations/multiply/multiply";
import divide from "./components/calcMethods/operations/divide/divide";
import factorial from "./components/calcMethods/operations/factorial/factorial";
import percent from "./components/calcMethods/operations/percent/percent";
import clear from "./components/calcMethods/operations/clear/clear";
import oneDivideX from "./components/calcMethods/operations/oneDivideX/oneDivideX";
import larr from "./components/calcMethods/operations/larr/larr";
import back from "./components/calcMethods/operations/back/back";
import plusMinus from "./components/calcMethods/operations/plusMinus/plusMinus";

import memoryClear from "./components/calcMethods/memory/memoryClear/memoryClear";
import memoryPlus from "./components/calcMethods/memory/memoryPlus/memoryPlus";
import memoryMinus from "./components/calcMethods/memory/memoryMinus/memoryMinus";
import memorySave from "./components/calcMethods/memory/memorySave/memorySave";
import memoryRead from "./components/calcMethods/memory/memoryRead/memoryRead";

//main class
class Calculator {
  constructor() {
    this.props = {
      currentValue: "0",
      operation: null,
      prevValue: "",
      memory: "0",
      history: ["0"],
    };
  }

  //help function for factorial
  factFunc() {
    this.props.currentValue = this.displayValue(
      this.factorial(this.props.prevValue)
    );
  }

  //function that gets x to the power of 2
  xPow2() {
    this.xPowY(2);
  }

  //function that gets x to the power of 3
  xPow3() {
    this.xPowY(3);
  }

  //function that gets a square root of current value
  squareRoot() {
    this.root(2);
  }

  //function that gets a cube root of current value
  tripleRoot() {
    this.root(3);
  }
}

const calc = new Calculator();

const getNum = new commandGetValue(calc);
const valueExecuter = new Executer(getNum);

const pushOperator = new commandPushOperation(calc);
const operationExecuter = new Executer(pushOperator);

const makeOperation = new commandDoOperation(calc);
const calculationExecuter = new Executer(makeOperation);

const getMemoryOperation = new commandMemory(calc);
const memoryExecuter = new Executer(getMemoryOperation);

//command pattern
Calculator.prototype.pushOperation = pushOperation;
Calculator.prototype.findOperation = findOperation;
Calculator.prototype.memoryOperation = memoryOperation;

Calculator.prototype.displayValue = displayValue;
Calculator.prototype.changeValues = changeValues;
Calculator.prototype.getValue = getValue;

Calculator.prototype.memoryClear = new memoryClear(calc).execute;
Calculator.prototype.memoryMinus = new memoryMinus(calc).execute;
Calculator.prototype.memoryPlus = new memoryPlus(calc).execute;
Calculator.prototype.memoryRead = new memoryRead(calc).execute;
Calculator.prototype.memorySave = new memorySave(calc).execute;

Calculator.prototype.root = new root(calc).execute.bind(calc);
Calculator.prototype.xPowY = new xPowY(calc).execute.bind(calc);
Calculator.prototype.plus = new plus(calc).execute.bind(calc);
Calculator.prototype.minus = new minus(calc).execute.bind(calc);
Calculator.prototype.multiply = new multiply(calc).execute.bind(calc);
Calculator.prototype.divide = new divide(calc).execute.bind(calc);
Calculator.prototype.factorial = new factorial(calc).execute.bind(calc);
Calculator.prototype.percent = new percent(calc).execute.bind(calc);
Calculator.prototype.clear = new clear(calc).execute.bind(calc);
Calculator.prototype.oneDivideX = new oneDivideX(calc).execute.bind(calc);
Calculator.prototype.larr = new larr(calc).execute.bind(calc);
Calculator.prototype.back = new back(calc).execute.bind(calc);
Calculator.prototype.plusMinus = new plusMinus(calc).execute.bind(calc);

//function that gets a value from input and find executer for it
function findExec(value) {
  if (value === "." || !isNaN(value)) {
    valueExecuter.execute(value);
  } else if (value[0] === "M") {
    memoryExecuter.execute(value);
  } else if (value !== "=") {
    operationExecuter.execute(value);
  } else {
    calculationExecuter.execute(`${calc.props.operation}`);
  }
}

//getting click events from buttons
document.querySelectorAll(".app-controls-button").forEach((item) => {
  item.addEventListener("click", () => {
    findExec(item.innerHTML);
  });
});

//getting click events from display
document.querySelector(".display-content").addEventListener("click", () => {
  findExec("Back");
});
