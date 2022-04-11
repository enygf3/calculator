import squareRoot from "./squareRoot";

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
calc.squareRoot = new squareRoot(calc).execute.bind(calc);
calc.displayValue = function () {};

test("9 to be equal 3", () => {
  expect(calc.squareRoot(9)).toStrictEqual("3");
});

test("0 to be equal 0", () => {
  expect(calc.squareRoot(0)).toStrictEqual("0");
});

test("-9 to be equal NaN", () => {
  expect(calc.squareRoot(-9)).toStrictEqual("NaN");
});

test("16 to be equal 2", () => {
  expect(calc.squareRoot(16)).toStrictEqual("4");
});
