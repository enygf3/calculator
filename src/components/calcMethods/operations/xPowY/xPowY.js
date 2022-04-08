export default class xPowY {
  constructor(props) {
    this.calculator = props;
  }

  execute(arg = this.props.currentValue) {
    if (this.props.prevValue) {
      this.props.currentValue = (
        Number(this.props.prevValue) ** arg
      ).toString();
    }

    this.displayValue();
  }
}
