import "./styles/style.sass";

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
    if (this.props.currentValue && this.props.prevValue) {
      this.props.currentValue = (
        Number(this.props.prevValue) - Number(this.props.currentValue)
      ).toString();
      this.props.prevValue = "";
      this.displayValue();
    }
  }

  divide() {
    if (this.props.currentValue && this.props.prevValue) {
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
    this.props.memory = "";
    this.props.history = [];
    this.displayValue();
  }

  doOperation(operation) {
    switch (operation) {
      case "+":
        this.plus();
        break;
      case "-":
        this.minus();
        break;
      case "×":
        this.multiply();
        break;
      case "/":
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

document.querySelectorAll(".app-controls-button").forEach((item) => {
  item.addEventListener("click", () => {
    if (!isNaN(item.innerHTML) || Number(item.innerHTML)) {
      valueExecuter.execute(item.innerHTML);
      console.log(calc);
    } else if (item.innerHTML === "=") {
      calculationExecuter.execute(`${calc.props.operation}`);
      console.log(calc);
    } else if (item.innerHTML === "C") {
      calc.clear();
      console.log(calc);
    } else {
      operationExecuter.execute(item.innerHTML);
      console.log(calc);
    }
  });
});
