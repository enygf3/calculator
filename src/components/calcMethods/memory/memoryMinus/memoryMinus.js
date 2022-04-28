//function that subtracts the value of the current value from the memory
export default class memoryMinus {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.memory = (
      Number(this.props.memory) - Number(this.props.currentValue)
    ).toString();
  }
}
