import tenPowX from "./tenPowX";

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
calc.tenPowX = new tenPowX(calc).execute.bind(calc);
calc.displayValue = function () {};

test("3 to be equal 1000", () => {
  expect(calc.tenPowX(3)).toStrictEqual("1000");
});

test("0 to be equal 1", () => {
  expect(calc.tenPowX(0)).toStrictEqual("1");
});

test("1 to be equal NaN", () => {
  expect(calc.tenPowX(1)).toStrictEqual("10");
});

test("-2 to be equal 0.01", () => {
  expect(calc.tenPowX(-2)).toStrictEqual("0.01");
});
