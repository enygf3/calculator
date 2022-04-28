//function that adds the current value to the memory
export default class memoryPlus {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.memory = (
      Number(this.props.memory) + Number(this.props.currentValue)
    ).toString();
  }
}
