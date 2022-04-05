export default class commandMemoryPlus {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.memoryPlus();
  }
}
