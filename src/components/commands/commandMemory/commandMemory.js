export default class commandMemory {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute(value) {
    this.calculator.memoryOperation(value);
  }
}
