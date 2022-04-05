export default class commandMemorySave {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.memorySave();
  }
}
