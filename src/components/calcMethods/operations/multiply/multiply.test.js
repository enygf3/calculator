import multiply from "./multiply";

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
calc.multiply = new multiply(calc).execute.bind(calc);
calc.displayValue = function () {};

test("8, 2 to be equal 16", () => {
  expect(calc.multiply(8, 2)).toStrictEqual("16");
});

test("0, -2 to be equal 0", () => {
  expect(calc.multiply(0, -2)).toStrictEqual("0");
});

test("-5, -10 to be equal 50", () => {
  expect(calc.multiply(-5, -10)).toStrictEqual("50");
});

test("0, 0 to be equal 0", () => {
  expect(calc.multiply(0, 0)).toStrictEqual("0");
});
