export default class memoryRead {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = this.props.memory;
    this.displayValue();
  }
}
