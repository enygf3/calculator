//function that calculates the n root of a number
export default class root {
  constructor(props) {
    this.calculator = props;
  }

  execute(power = Number(this.props.currentValue), arg) {
    if (!isNaN(power)) {
      this.props.currentValue = (
        Number(arg || this.props.prevValue) **
        (1 / power)
      ).toString();

      this.displayValue();
    }

    return this.props.currentValue;
  }
}
