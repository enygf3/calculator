import minus from "./minus";

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
calc.minus = new minus(calc).execute.bind(calc);
calc.displayValue = function () {};

test("8, 2 to be equal 6", () => {
  expect(calc.minus(8, 2)).toStrictEqual("6");
});

test("0, -2 to be equal 2", () => {
  expect(calc.minus(0, -2)).toStrictEqual("2");
});

test("10000, -10000 to be equal -20000", () => {
  expect(calc.minus(10000, -10000)).toStrictEqual("20000");
});

test("-5, -3 to be equal -2", () => {
  expect(calc.minus(-5, -3)).toStrictEqual("-2");
});
