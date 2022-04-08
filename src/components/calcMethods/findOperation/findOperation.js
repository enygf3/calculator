export default function findOperation(value) {
  const data = new Map([
    ["+", this.plus],
    ["−", this.minus],
    ["×", this.multiply],
    ["÷", this.divide],
    ["%", this.procent],
    ["Xᵧ", this.xPowY],
    ["ᵧ√", this.root],
  ]);

  data.get(value)();
}
