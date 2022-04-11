import root from "./root";

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
calc.root = new root(calc).execute.bind(calc);
calc.displayValue = function () {};

test("2, 9 to be equal 3", () => {
  expect(calc.root(2, 9)).toStrictEqual("3");
});

test("2, 0 to be equal 0", () => {
  expect(calc.root(2, 0)).toStrictEqual("0");
});

test("4, -9 to be equal NaN", () => {
  expect(calc.root(4, -9)).toStrictEqual("NaN");
});

test("4, 16 to be equal 2", () => {
  expect(calc.root(4, 16)).toStrictEqual("2");
});
