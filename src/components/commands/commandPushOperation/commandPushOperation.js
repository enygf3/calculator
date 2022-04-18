export default class commandPushOperation {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute(value) {
    this.calculator.pushOperation(value);
  }
}
