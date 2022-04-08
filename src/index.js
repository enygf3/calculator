import "./styles/style.sass";
import commandMemory from "./components/commands/commandMemory/commandMemory";
import commandGetValue from "./components/commands/commandGetValue/commandGetValue";
import commandDoOperation from "./components/commands/commandDoOperation/commandDoOperation";
import commandPushOperation from "./components/commands/commandPushOperation/commandPushOperation";
import Executer from "./components/executer/executer";
import root from "./components/calcMethods/root/root";
import getValue from "./components/calcMethods/getValue/getValue";
import pushOperation from "./components/calcMethods/pushOperation/pushOperation";
import xPowY from "./components/calcMethods/xPowY/xPowY";
import findOperation from "./components/calcMethods/findOperation/findOperation";
import memoryOperation from "./components/calcMethods/memoryOperation/memoryOperation";
import displayValue from "./components/calcMethods/displayValue/displayValue";
import changeValues from "./components/calcMethods/changeValues/changeValues";
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

  //function that adds numbers
  plus() {
    this.props.currentValue = (
      Number(this.props.prevValue) + Number(this.props.currentValue)
    ).toString();
    this.props.prevValue = "";
    console.log(this.props.currentValue);
    this.displayValue();
  }

  //function that subtracts numbers
  minus() {
    this.props.currentValue = Number(
      Number(this.props.prevValue) - Number(this.props.currentValue)
    ).toString();
    this.props.prevValue = "";
    this.displayValue();
  }

  //function that divides numbers
  divide() {
    this.props.currentValue = (
      Number(this.props.prevValue) / Number(this.props.currentValue)
    ).toString();
    this.props.prevValue = "";
    this.displayValue();
  }
  //function that multiplies numbers
  multiply() {
    if (this.props.currentValue && this.props.prevValue) {
      this.props.currentValue = (
        Number(this.props.prevValue) * Number(this.props.currentValue)
      ).toString();
      this.props.prevValue = "";
      this.displayValue();
    }
  }

  //function that getting a percent of current value
  percent() {
    if (this.props.currentValue && this.props.prevValue) {
      this.props.currentValue = (
        (Number(this.props.prevValue) * Number(this.props.currentValue)) /
        100
      ).toString();
      this.props.prevValue = "";
      this.displayValue();
    }
  }

  //function that clears current value
  clear() {
    this.props.currentValue = "0";
    this.props.prevValue = "";
    this.props.operation = null;
    this.props.history = [];
    this.displayValue();
  }

  //functino that divides one by X
  oneDivideX() {
    if (this.props.prevValue !== "0" && this.props.prevValue) {
      this.props.currentValue = (1 / Number(this.props.prevValue)).toString();
    }
    this.displayValue();
  }

  //function that gets a factorial of current value
  factorial(arg) {
    return arg !== 1 ? arg * this.factorial(arg - 1) : 1;
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

  //function that changes sign of current value
  plusMinus() {
    if (this.props.prevValue !== "0" && this.props.prevValue) {
      this.props.currentValue = Number(this.props.prevValue) * -1;
    }
    this.displayValue();
  }

  //function that deletes a number from right side of current value
  larr() {
    if (this.props.currentValue.length > 0) {
      this.props.currentValue =
        this.props.currentValue.slice(0, this.props.currentValue.length - 1) ||
        "0";
    }

    this.displayValue();
  }

  //function that gets a square root of current value
  squareRoot() {
    this.root(2);
  }

  //function that gets a cube root of current value
  tripleRoot() {
    this.root(3);
  }

  //function that cancels last operation
  back() {
    this.props.currentValue = this.props.history[0];
    this.props.history[0] = "0";
    this.displayValue();
  }
}

//command pattern
Calculator.prototype.root = root;
Calculator.prototype.xPowY = xPowY;

Calculator.prototype.displayValue = displayValue;
Calculator.prototype.changeValues = changeValues;
Calculator.prototype.getValue = getValue;

Calculator.prototype.pushOperation = pushOperation;
Calculator.prototype.findOperation = findOperation;
Calculator.prototype.memoryOperation = memoryOperation;

Calculator.prototype.memoryClear = memoryClear;
Calculator.prototype.memoryMinus = memoryMinus;
Calculator.prototype.memoryPlus = memoryPlus;
Calculator.prototype.memoryRead = memoryRead;
Calculator.prototype.memorySave = memorySave;

const calc = new Calculator();

const getNum = new commandGetValue(calc);
const valueExecuter = new Executer(getNum);

const pushOperator = new commandPushOperation(calc);
const operationExecuter = new Executer(pushOperator);

const makeOperation = new commandDoOperation(calc);
const calculationExecuter = new Executer(makeOperation);

const getMemoryOperation = new commandMemory(calc);
const memoryExecuter = new Executer(getMemoryOperation);

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
