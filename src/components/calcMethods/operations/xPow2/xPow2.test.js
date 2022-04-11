import xPow2 from "./xPow2";

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
calc.xPow2 = new xPow2(calc).execute.bind(calc);
calc.displayValue = function () {};

test("3 to be equal 9", () => {
  expect(calc.xPow2(3)).toStrictEqual("9");
});

test("0 to be equal 0", () => {
  expect(calc.xPow2(0)).toStrictEqual("0");
});

test("-5 to be equal 25", () => {
  expect(calc.xPow2(-5)).toStrictEqual("25");
});

test("-2 to be equal 4", () => {
  expect(calc.xPow2(-2)).toStrictEqual("4");
});
