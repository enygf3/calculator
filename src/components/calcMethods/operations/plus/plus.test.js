import plus from "./plus";

class Calculator {
  constructor() {
    this.props = {
      currentValue: "0",
      operation: null,
      prevValue: "",
      memory: "0",
      history: "0",
    };
  }
}
let calc = new Calculator();
calc.plus = new plus(calc).execute.bind(calc);
calc.displayValue = function () {};

test("10, 100 to be equal 110", () => {
  expect(calc.plus(10, 100)).toStrictEqual("110");
});

test("0, 0 to be equal 0", () => {
  expect(calc.plus(0, 0)).toStrictEqual("0");
});

test("-5, 5 to be equal 0", () => {
  expect(calc.plus(-5, 5)).toStrictEqual("0");
});

test("-12, -23 to be equal -35", () => {
  expect(calc.plus(-12, -23)).toStrictEqual("-35");
});
