export default function findOperation(value) {
  console.log(this);
  const data = new Map([
    ["+", this.plus],
    ["−", this.minus],
    ["×", this.multiply],
    ["÷", this.divide],
    ["%", this.procent],
    ["1/x", this.oneDivideX],
    ["!x", this.factFunc],
    ["X²", this.xPow2],
    ["X³", this.xPow3],
    ["Xᵧ", this.xPowY],
    ["±", this.plusMinus],
    ["²√", this.squareRoot],
    ["³√", this.tripleRoot],
    ["ᵧ√", this.root],
  ]);

  data.get(value)();
}
