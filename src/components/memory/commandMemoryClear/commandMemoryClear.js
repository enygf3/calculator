export default class commandMemoryClear {
  constructor(calculator) {
    this.calculator = calculator;
  }

  execute() {
    this.calculator.memoryClear();
  }
}
