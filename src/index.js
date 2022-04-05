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
    if (this.props.currentValue && this.props.prevValue) {
      this.props.currentValue = (
        Number(this.props.prevValue) + Number(this.props.currentValue)
      ).toString();
      this.props.prevValue = "";
      this.displayValue();
    }
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

  doOperation(operation) {
    switch (operation) {
      case "+":
        this.plus();
        break;
      case "−":
        this.minus();
        break;
      case "×":
        this.multiply();
        break;
      case "÷":
        this.divide();
        break;
      case "%":
        this.procent();
        break;
      default:
        break;
    }
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
    this.calculator.pushOperation(value);
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

class commandCalculate {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute(value) {
    this.calculator.doOperation(value);
  }
}

const calc = new Calculator();
const getValue = new commandGetValue(calc);
const valueExecuter = new Executer(getValue);

const pushOperation = new CommandPushOperation(calc);
const operationExecuter = new Executer(pushOperation);

const doCalculation = new commandCalculate(calc);
const calculationExecuter = new Executer(doCalculation);

const saveMemory = new commandMemorySave(calc);
const saveMemoryExecuter = new Executer(saveMemory);

const clearMemory = new commandMemoryClear(calc);
const clearMemoryExecuter = new Executer(clearMemory);

const readMemory = new commandMemoryRead(calc);
const readMemoryExecuter = new Executer(readMemory);

const plusMemory = new commandMemoryPlus(calc);
const plusMemoryExecuter = new Executer(plusMemory);

const minusMemory = new commandMemoryMinus(calc);
const minusMemoryExecuter = new Executer(minusMemory);

document.querySelectorAll(".app-controls-button").forEach((item) => {
  item.addEventListener("click", () => {
    if (!isNaN(item.innerHTML) || Number(item.innerHTML)) {
      valueExecuter.execute(item.innerHTML);
      console.log(calc);
    } else if (item.innerHTML === "=") {
      calculationExecuter.execute(`${calc.props.operation}`);
      console.log(calc);
    } else if (item.innerHTML === "MS") {
      saveMemoryExecuter.execute();
      console.log(calc);
    } else if (item.innerHTML === "MC") {
      clearMemoryExecuter.execute();
      console.log(calc);
    } else if (item.innerHTML === "MR") {
      readMemoryExecuter.execute();
      console.log(calc);
    } else if (item.innerHTML === "C") {
      calc.clear();
      console.log(calc);
    } else if (item.innerHTML === "M-") {
      minusMemoryExecuter.execute();
      console.log(calc);
    } else if (item.innerHTML === "M+") {
      plusMemoryExecuter.execute();
      console.log(calc);
    } else {
      operationExecuter.execute(item.innerHTML);
      console.log(item.innerHTML);
      console.log(calc);
    }
  });
});
