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

    let result;
    return (result = this.props.currentValue);
  }
}
