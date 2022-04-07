export default class commandDoOperation {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute(value) {
    this.calculator.findOperation(value);
  }
}
