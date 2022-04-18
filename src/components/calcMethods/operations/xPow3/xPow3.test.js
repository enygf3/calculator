import xPow3 from "./xPow3";

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
calc.xPow3 = new xPow3(calc).execute.bind(calc);
calc.displayValue = function () {};

test("3 to be equal 27", () => {
  expect(calc.xPow3(3)).toStrictEqual("27");
});

test("0 to be equal 0", () => {
  expect(calc.xPow3(0)).toStrictEqual("0");
});

test("-5 to be equal 25", () => {
  expect(calc.xPow3(-5)).toStrictEqual("-125");
});

test("-2 to be equal 4", () => {
  expect(calc.xPow3(-2)).toStrictEqual("-8");
});
