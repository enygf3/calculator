//function that reads the value from the memory and pushing it to the current value, then displays the value
export default class memoryRead {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = this.props.memory;
    this.displayValue();
  }
}
