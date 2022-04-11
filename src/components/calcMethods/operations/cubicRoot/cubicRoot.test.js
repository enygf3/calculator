import cubicRoot from "./cubicRoot";

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
calc.cubicRoot = new cubicRoot(calc).execute.bind(calc);
calc.displayValue = function () {};

test("8 to be equal 2", () => {
  expect(calc.cubicRoot(8)).toStrictEqual("2");
});

test("0 to be equal 1", () => {
  expect(calc.cubicRoot(0)).toStrictEqual("0");
});

test("125 to be equal 5", () => {
  expect(calc.cubicRoot(125)).toStrictEqual("5");
});
