//function that finds the operation and returns the function
export default function findOperation(value) {
  const data = new Map([
    ["+", this.plus],
    ["−", this.minus],
    ["×", this.multiply],
    ["÷", this.divide],
    ["%", this.percent],
    ["Xᵧ", this.xPowY],
    ["ᵧ√", this.root],
  ]);

  data.get(value)();
}
