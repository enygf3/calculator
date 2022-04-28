//function that gets the operation and returns the function or calling function in case of instant operation
export default function pushOperation(operation) {
  const data = new Map([
    ["C", this.clear],
    ["←", this.larr],
    ["Back", this.back],
    ["²√", this.squareRoot],
    ["³√", this.cubicRoot],
    ["X²", this.xPow2],
    ["X³", this.xPow3],
    ["1/x", this.oneDivideX],
    ["10ₓ", this.tenPowX],
    ["!x", this.factorial],
    ["±", this.plusMinus],
  ]);

  if (data.has(operation)) {
    data.get(operation)();
  } else {
    if (
      this.props.currentValue &&
      this.props.prevValue &&
      this.props.operation
    ) {
      this.findOperation(this.props.operation);
      this.changeValues();
      this.props.operation = operation;
    } else {
      this.props.operation = operation;
      if (this.props.currentValue) {
        this.changeValues();
      }
    }
  }
}
