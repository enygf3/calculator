export default class commandMemoryMinus {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.memoryMinus();
  }
}
