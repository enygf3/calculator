import oneDivideX from "./oneDivideX";

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
calc.oneDivideX = new oneDivideX(calc).execute.bind(calc);
calc.displayValue = function () {};

test("2 to be equal 0.5", () => {
  expect(calc.oneDivideX(2)).toStrictEqual("0.5");
});

test("10 to be equal 0.1", () => {
  expect(calc.oneDivideX(10)).toStrictEqual("0.1");
});

test("-5 to be equal -0.2", () => {
  expect(calc.oneDivideX(-5)).toStrictEqual("-0.2");
});

test("0 to be equal Infinity", () => {
  expect(calc.oneDivideX(0)).toStrictEqual("Infinity");
});
