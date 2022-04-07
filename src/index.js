import "./styles/style.sass";
import commandMemorySave from "./components/memory/commandMemorySave/commandMemorySave";
import commandMemoryClear from "./components/memory/commandMemoryClear/commandMemoryClear";
import commandMemoryRead from "./components/memory/commandMemoryRead/commandMemoryRead";
import commandMemoryPlus from "./components/memory/commandMemoryPlus/commandMemoryPlus";
import commandMemoryMinus from "./components/memory/commandMemoryMinus/commandMemoryMinus";

class Calculator {
  constructor() {
    this.props = {
      currentValue: "0",
      operation: null,
      prevValue: "",
      memory: "0",
      history: [],
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
    if (
      this.props.currentValue &&
      this.props.prevValue &&
      this.props.operation
    ) {
      this.findOperation(this.props.operation);
      this.changeValues();
      this.props.operation = operation;
    } else {
      if (operation !== "←") {
        this.props.operation = operation;
        if (this.props.currentValue) {
          this.changeValues();
        }
      } else {
        this.props.operation = operation;
      }
    }
  }

  displayValue(arg = calc.props.currentValue) {
    document.querySelector(".display-content").innerHTML = arg;
    console.log(document.querySelector(".display-content").innerHTML, arg);

    return arg.toString();
  }

  changeValues() {
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
    console.log("larr");
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
      ["←", this.larr.bind(this)],
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

class Executer {
  constructor(command) {
    this.command = command;
  }

  execute(value) {
    this.command.execute(value);
  }
}

class CommandPushOperation {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute(value) {
    if (value === "C") {
      this.calculator.clear();
    } else if (value === "←") {
      this.calculator.larr();
    } else {
      this.calculator.pushOperation(value);
    }
  }
}

class commandGetValue {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute(value) {
    this.calculator.getValue(value);
  }
}

class doOperation {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute(value) {
    this.calculator.findOperation(value);
  }
}

class commandMemory {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute(value) {
    this.calculator.memoryOperation(value);
  }
}

const calc = new Calculator();

const getValue = new commandGetValue(calc);
const valueExecuter = new Executer(getValue);

const pushOperation = new CommandPushOperation(calc);
const operationExecuter = new Executer(pushOperation);

const makeOperation = new doOperation(calc);
const calculationExecuter = new Executer(makeOperation);

const memoryOperation = new commandMemory(calc);
const memoryExecuter = new Executer(memoryOperation);

function findExec(value) {
  if (value === "." || !isNaN(value)) {
    valueExecuter.execute(value);
    console.log(calc);
  } else if (value[0] === "M") {
    memoryExecuter.execute(value);
    console.log(calc);
  } else if (value !== "=") {
    operationExecuter.execute(value);
    console.log(calc, value);
  } else {
    calculationExecuter.execute(`${calc.props.operation}`);
    console.log(calc);
  }
}

document.querySelectorAll(".app-controls-button").forEach((item) => {
  item.addEventListener("click", () => {
    findExec(item.innerHTML);
  });
});
