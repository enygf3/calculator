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

  memorySave() {
    this.props.memory = this.props.currentValue;
  }

  memoryClear() {
    this.props.memory = "0";
  }

  memoryRead() {
    this.props.currentValue = this.props.memory;
    this.displayValue();
  }

  memoryPlus() {
    this.props.memory = (
      Number(this.props.memory) + Number(this.props.currentValue)
    ).toString();
  }

  memoryMinus() {
    this.props.memory = (
      Number(this.props.memory) - Number(this.props.currentValue)
    ).toString();
  }

  plus() {
    this.props.currentValue = (
      Number(this.props.prevValue) + Number(this.props.currentValue)
    ).toString();
    this.props.prevValue = "";
    console.log(this.props.currentValue);
    this.displayValue();
  }

  minus() {
    this.props.currentValue = Number(
      Number(this.props.prevValue) - Number(this.props.currentValue)
    ).toString();
    this.props.prevValue = "";
    this.displayValue();
  }

  divide() {
    this.props.currentValue = (
      Number(this.props.prevValue) / Number(this.props.currentValue)
    ).toString();
    this.props.prevValue = "";
    this.displayValue();
  }

  multiply() {
    if (this.props.currentValue && this.props.prevValue) {
      this.props.currentValue = (
        Number(this.props.prevValue) * Number(this.props.currentValue)
      ).toString();
      this.props.prevValue = "";
      this.displayValue();
    }
  }

  procent() {
    if (this.props.currentValue && this.props.prevValue) {
      this.props.currentValue = (
        (Number(this.props.prevValue) * Number(this.props.currentValue)) /
        100
      ).toString();
      this.props.prevValue = "";
      this.displayValue();
    }
  }

  clear() {
    this.props.currentValue = "0";
    this.props.prevValue = "";
    this.props.operation = null;
    this.props.history = [];
    this.displayValue();
  }

  oneDivideX() {
    if (this.props.prevValue !== "0" && this.props.prevValue) {
      this.props.currentValue = (1 / Number(this.props.prevValue)).toString();
    }
    this.displayValue();
  }

  factorial(arg) {
    return arg !== 1 ? arg * this.factorial(arg - 1) : 1;
  }

  factFunc() {
    this.props.currentValue = this.displayValue(
      this.factorial(this.props.prevValue)
    );
  }

  xPow2() {
    this.xPowY(2);
  }

  xPow3() {
    this.xPowY(3);
  }

  plusMinus() {
    if (this.props.prevValue !== "0" && this.props.prevValue) {
      this.props.currentValue = Number(this.props.prevValue) * -1;
    }
    this.displayValue();
  }

  larr() {
    if (this.props.currentValue.length > 0) {
      this.props.currentValue =
        this.props.currentValue.slice(0, this.props.currentValue.length - 1) ||
        "0";
    }

    this.displayValue();
  }

  squareRoot() {
    this.root(2);
  }

  tripleRoot() {
    this.root(3);
  }

  back() {
    this.props.currentValue = this.props.history[0];
    this.props.history[0] = "0";
    this.displayValue();
  }
}

Calculator.prototype.root = root;
Calculator.prototype.getValue = getValue;
Calculator.prototype.pushOperation = pushOperation;
Calculator.prototype.xPowY = xPowY;
Calculator.prototype.findOperation = findOperation;
Calculator.prototype.memoryOperation = memoryOperation;
Calculator.prototype.displayValue = displayValue;
Calculator.prototype.changeValues = changeValues;

const calc = new Calculator();

const getNum = new commandGetValue(calc);
const valueExecuter = new Executer(getNum);

const pushOperator = new commandPushOperation(calc);
const operationExecuter = new Executer(pushOperator);

const makeOperation = new commandDoOperation(calc);
const calculationExecuter = new Executer(makeOperation);

const getMemoryOperation = new commandMemory(calc);
const memoryExecuter = new Executer(getMemoryOperation);

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

document.querySelectorAll(".app-controls-button").forEach((item) => {
  item.addEventListener("click", () => {
    findExec(item.innerHTML);
  });
});

document.querySelector(".display-content").addEventListener("click", () => {
  findExec("Back");
});
