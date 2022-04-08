export default class root {
  constructor(props) {
    this.calculator = props;
  }

  execute(power = this.props.currentValue, arg) {
    this.props.currentValue = (
      Number(arg || this.props.prevValue) **
      (1 / power)
    ).toString();

    this.displayValue();
  }
}
