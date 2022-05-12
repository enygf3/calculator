//function that multiplies two numbers
export default class multiply {
  constructor(props) {
    this.calculator = props;
  }

  execute(
    value = Number(this.props.currentValue),
    prev = this.props.prevValue
  ) {
    if (!isNaN(value) && !isNaN(prev)) {
      this.props.currentValue = (Number(prev) * Number(value)).toString();
      this.props.prevValue = "";
      this.displayValue();

      return this.props.currentValue;
    }
  }
}
