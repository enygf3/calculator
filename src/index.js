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
      memory: "",
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
    this.props.operation = operation;
    if (this.props.currentValue) {
      this.changeValues();
    }
  }

  displayValue() {
    document.querySelector(".display-content").innerHTML =
      calc.props.currentValue;
    console.log(
      document.querySelector(".display-content").innerHTML,
      calc.props.currentValue
    );
  }

  changeValues() {
    this.props.prevValue = this.props.currentValue;
    this.props.currentValue = "0";
  }

  memorySave() {
    this.props.memory = this.props.currentValue;
  }

  memoryClear() {
    this.props.memory = "";
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

  findOperation(value) {
    const operators = {
      plus: this.plus.bind(this),
      minus: this.minus.bind(this),
      multiply: this.multiply.bind(this),
      divide: this.divide.bind(this),
      procent: this.procent.bind(this),
    };

    const variables = {
      plus: "+",
      minus: "−",
      multiply: "×",
      divide: "÷",
      procent: "%",
    };

    operators[Object.keys(variables).find((key) => variables[key] === value)]();
  }

  memoryOperation(value) {
    const operators = {
      memoryPlus: this.memoryPlus.bind(this),
      memoryMinus: this.memoryMinus.bind(this),
      memoryRead: this.memoryRead.bind(this),
      memorySave: this.memorySave.bind(this),
      memoryClear: this.memoryClear.bind(this),
    };

    const variables = {
      memoryPlus: "M+",
      memoryMinus: "M-",
      memoryRead: "MR",
      memorySave: "MS",
      memoryClear: "MC",
    };

    operators[Object.keys(variables).find((key) => variables[key] === value)]();
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
    value !== "C"
      ? this.calculator.pushOperation(value)
      : this.calculator.clear();
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
  console.log(calc, value[0]);
  if (!isNaN(value)) {
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
