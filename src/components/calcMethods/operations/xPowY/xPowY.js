export default class xPowY {
  constructor(props) {
    this.calculator = props;
  }

  execute(arg = this.props.currentValue, power = this.props.currentValue) {
    this.props.currentValue = (
      Number(this.props.prevValue || arg) ** power
    ).toString();

    this.displayValue();
  }
}
