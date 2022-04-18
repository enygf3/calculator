import "./styles/style.sass";

import "./img/moon.png";
import "./img/sun.ico";

import getTheme from "./components/getTheme/getTheme";

import commandMemory from "./components/commands/commandMemory/commandMemory";
import commandGetValue from "./components/commands/commandGetValue/commandGetValue";
import commandDoOperation from "./components/commands/commandDoOperation/commandDoOperation";
import commandPushOperation from "./components/commands/commandPushOperation/commandPushOperation";

import Executer from "./components/executer/executer";

import getValue from "./components/CalcMethods/getValue/getValue";
import pushOperation from "./components/CalcMethods/pushOperation/pushOperation";
import findOperation from "./components/CalcMethods/findOperation/findOperation";
import memoryOperation from "./components/CalcMethods/memoryOperation/memoryOperation";
import displayValue from "./components/CalcMethods/displayValue/displayValue";
import changeValues from "./components/CalcMethods/changeValues/changeValues";

import xPowY from "./components/CalcMethods/operations/xPowY/xPowY";
import root from "./components/CalcMethods/operations/root/root";
import plus from "./components/CalcMethods/operations/plus/plus";
import minus from "./components/CalcMethods/operations/minus/minus";
import multiply from "./components/CalcMethods/operations/multiply/multiply";
import divide from "./components/CalcMethods/operations/divide/divide";
import factorial from "./components/CalcMethods/operations/factorial/factorial";
import percent from "./components/CalcMethods/operations/percent/percent";
import clear from "./components/CalcMethods/operations/clear/clear";
import oneDivideX from "./components/CalcMethods/operations/oneDivideX/oneDivideX";
import larr from "./components/CalcMethods/operations/larr/larr";
import back from "./components/CalcMethods/operations/back/back";
import plusMinus from "./components/CalcMethods/operations/plusMinus/plusMinus";
import xPow2 from "./components/CalcMethods/operations/xPow2/xPow2";
import xPow3 from "./components/CalcMethods/operations/xPow3/xPow3";
import squareRoot from "./components/CalcMethods/operations/squareRoot/squareRoot";
import cubicRoot from "./components/CalcMethods/operations/cubicRoot/cubicRoot";
import tenPowX from "./components/CalcMethods/operations/tenPowX/tenPowX";

import memoryClear from "./components/CalcMethods/memory/memoryClear/memoryClear";
import memoryPlus from "./components/CalcMethods/memory/memoryPlus/memoryPlus";
import memoryMinus from "./components/CalcMethods/memory/memoryMinus/memoryMinus";
import memorySave from "./components/CalcMethods/memory/memorySave/memorySave";
import memoryRead from "./components/CalcMethods/memory/memoryRead/memoryRead";

//main class
class Calculator {
  constructor() {
    this.props = {
      currentValue: "0",
      operation: null,
      prevValue: "",
      memory: "0",
      history: "0",
    };
  }
}

//theme management
getTheme();

const Calc = new Calculator();

const getNum = new commandGetValue(Calc);
const valueExecuter = new Executer(getNum);

const pushOperator = new commandPushOperation(Calc);
const operationExecuter = new Executer(pushOperator);

const makeOperation = new commandDoOperation(Calc);
const CalculationExecuter = new Executer(makeOperation);

const getMemoryOperation = new commandMemory(Calc);
const memoryExecuter = new Executer(getMemoryOperation);

//command pattern
Calc.pushOperation = pushOperation;
Calc.findOperation = findOperation;
Calc.memoryOperation = memoryOperation;

Calc.displayValue = displayValue;
Calc.changeValues = changeValues;
Calc.getValue = getValue;

Calc.memoryClear = new memoryClear(Calc).execute;
Calc.memoryMinus = new memoryMinus(Calc).execute;
Calc.memoryPlus = new memoryPlus(Calc).execute;
Calc.memoryRead = new memoryRead(Calc).execute;
Calc.memorySave = new memorySave(Calc).execute;

Calc.root = new root(Calc).execute.bind(Calc);
Calc.squareRoot = new squareRoot(Calc).execute.bind(Calc);
Calc.cubicRoot = new cubicRoot(Calc).execute.bind(Calc);
Calc.xPowY = new xPowY(Calc).execute.bind(Calc);
Calc.xPow2 = new xPow2(Calc).execute.bind(Calc);
Calc.xPow3 = new xPow3(Calc).execute.bind(Calc);
Calc.plus = new plus(Calc).execute.bind(Calc);
Calc.minus = new minus(Calc).execute.bind(Calc);
Calc.multiply = new multiply(Calc).execute.bind(Calc);
Calc.divide = new divide(Calc).execute.bind(Calc);
Calc.factorial = new factorial(Calc).execute.bind(Calc);
Calc.percent = new percent(Calc).execute.bind(Calc);
Calc.clear = new clear(Calc).execute.bind(Calc);
Calc.oneDivideX = new oneDivideX(Calc).execute.bind(Calc);
Calc.larr = new larr(Calc).execute.bind(Calc);
Calc.back = new back(Calc).execute.bind(Calc);
Calc.plusMinus = new plusMinus(Calc).execute.bind(Calc);
Calc.tenPowX = new tenPowX(Calc).execute.bind(Calc);

//function that gets a value from input and find executer for it
function findExec(value) {
  if (value === "." || !isNaN(value)) {
    valueExecuter.execute(value);
  } else if (value[0] === "M") {
    memoryExecuter.execute(value);
  } else if (value !== "=") {
    operationExecuter.execute(value);
  } else {
    CalculationExecuter.execute(`${Calc.props.operation}`);
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
