export default class commandMemoryRead {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.memoryRead();
    this.calculator.displayValue();
  }
}
