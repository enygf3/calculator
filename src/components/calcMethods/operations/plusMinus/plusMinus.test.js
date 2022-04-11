import plusMinus from "./plusMinus";

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
calc.plusMinus = new plusMinus(calc).execute.bind(calc);
calc.displayValue = function () {};

test("10 to be equal -10", () => {
  expect(calc.plusMinus(10)).toStrictEqual("-10");
});

test("0 to be equal 0", () => {
  expect(calc.plusMinus(0)).toStrictEqual("0");
});

test("-12 to be equal -12", () => {
  expect(calc.plusMinus(-12)).toStrictEqual("12");
});

test("987654321 to be equal -987654321", () => {
  expect(calc.plusMinus(987654321)).toStrictEqual("-987654321");
});
