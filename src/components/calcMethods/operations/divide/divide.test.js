import divide from "./divide";

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
calc.divide = new divide(calc).execute.bind(calc);
calc.displayValue = function () {};

test("3, 8 to be equal 2", () => {
  expect(calc.divide(4, 8)).toStrictEqual("2");
});

test("0, 0 to be equal 0", () => {
  expect(calc.divide(0, 0)).toStrictEqual("NaN");
});

test("2, -10 to be equal -5", () => {
  expect(calc.divide(2, -10)).toStrictEqual("-5");
});

test("123, 123 to be equal 1", () => {
  expect(calc.divide(123, 123)).toStrictEqual("1");
});
