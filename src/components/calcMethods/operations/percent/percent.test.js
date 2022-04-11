import percent from "./percent";

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
calc.percent = new percent(calc).execute.bind(calc);
calc.displayValue = function () {};

test("10, 100 to be equal 10", () => {
  expect(calc.percent(10, 100)).toStrictEqual("10");
});

test("0, 3 to be equal 0", () => {
  expect(calc.percent(0, 3)).toStrictEqual("0");
});

test("-5, 5 to be equal -0.25", () => {
  expect(calc.percent(-5, 5)).toStrictEqual("-0.25");
});

test("5560, 100 to be equal 5560", () => {
  expect(calc.percent(5560, 100)).toStrictEqual("5560");
});
