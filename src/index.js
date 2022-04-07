import "./styles/style.sass";
import commandMemory from "./components/commands/commandMemory/commandMemory";
import commandGetValue from "./components/commands/commandGetValue/commandGetValue";
import commandDoOperation from "./components/commands/commandDoOperation/commandDoOperation";
import commandPushOperation from "./components/commands/commandPushOperation/commandPushOperation";
import Executer from "./components/executer/executer";

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

  getValue(value) {
    if (this.props.currentValue === "0") {
      this.props.currentValue = value;
    } else {
      this.props.currentValue += value;
    }

    this.displayValue();
  }

  pushOperation(operation) {
    if (operation === "C") {
      this.clear();
    } else if (operation === "←") {
      this.larr();
    } else if (operation === "Back") {
      this.back();
    } else {
      if (
        this.props.currentValue &&
        this.props.prevValue &&
        this.props.operation
      ) {
        this.findOperation(this.props.operation);
        this.changeValues();
        this.props.operation = operation;
      } else {
        this.props.operation = operation;
        if (this.props.currentValue) {
          this.changeValues();
        }
      }
    }
  }

  displayValue(arg = calc.props.currentValue) {
    document.querySelector(".display-content").innerHTML = arg;

    return arg.toString();
  }

  changeValues() {
    this.props.history[0] = this.props.currentValue;
    this.props.prevValue = this.props.currentValue;
    this.props.currentValue = "0";
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
    if (this.props.prevValue) {
      this.props.currentValue = (
        Number(this.props.prevValue) / Number(this.props.currentValue)
      ).toString();
      this.props.prevValue = "";
      this.displayValue();
    }
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

  xPowY(arg = this.props.currentValue) {
    if (this.props.prevValue) {
      this.props.currentValue = (
        Number(this.props.prevValue) ** arg
      ).toString();
    }

    this.displayValue();
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

  root(arg = this.props.currentValue) {
    if (this.props.prevValue) {
      this.props.currentValue = (
        Number(this.props.prevValue) **
        (1 / arg)
      ).toString();
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

  findOperation(value) {
    const data = new Map([
      ["+", this.plus.bind(this)],
      ["−", this.minus.bind(this)],
      ["×", this.multiply.bind(this)],
      ["÷", this.divide.bind(this)],
      ["%", this.procent.bind(this)],
      ["1/x", this.oneDivideX.bind(this)],
      ["!x", this.factFunc.bind(this)],
      ["X²", this.xPow2.bind(this)],
      ["X³", this.xPow3.bind(this)],
      ["Xᵧ", this.xPowY.bind(this)],
      ["±", this.plusMinus.bind(this)],
      ["²√", this.squareRoot.bind(this)],
      ["³√", this.tripleRoot.bind(this)],
      ["ᵧ√", this.root.bind(this)],
    ]);

    data.get(value)();
  }

  memoryOperation(value) {
    const data = new Map([
      ["M+", this.memoryPlus.bind(this)],
      ["M-", this.memoryMinus.bind(this)],
      ["MR", this.memoryRead.bind(this)],
      ["MS", this.memorySave.bind(this)],
      ["MC", this.memoryClear.bind(this)],
    ]);

    data.get(value)();
  }
}

const calc = new Calculator();

const getValue = new commandGetValue(calc);
const valueExecuter = new Executer(getValue);

const pushOperation = new commandPushOperation(calc);
const operationExecuter = new Executer(pushOperation);

const makeOperation = new commandDoOperation(calc);
const calculationExecuter = new Executer(makeOperation);

const memoryOperation = new commandMemory(calc);
const memoryExecuter = new Executer(memoryOperation);

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
