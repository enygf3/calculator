export default function findOperation(value) {
  const data = new Map([
    ["+", this.plus.bind(this)],
    ["−", this.minus.bind(this)],
    ["×", this.multiply.bind(this)],
    ["÷", this.divide.bind(this)],
    ["%", this.procent.bind(this)],
    ["1/x", this.oneDivideX.bind(this)],
    ["!x", this.factFunc.bind(this)],
    ["X²", this.xPow2.bind(this)],
    ["X³", this.xPow3.bind(this)],
    ["Xᵧ", this.xPowY.bind(this)],
    ["±", this.plusMinus.bind(this)],
    ["²√", this.squareRoot.bind(this)],
    ["³√", this.tripleRoot.bind(this)],
    ["ᵧ√", this.root.bind(this)],
  ]);

  data.get(value)();
}
