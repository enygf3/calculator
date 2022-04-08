export default class root {
  constructor(props) {
    this.calculator = props;
  }

  execute(arg = this.props.currentValue) {
    if (this.props.prevValue) {
      this.props.currentValue = (
        Number(this.props.prevValue) **
        (1 / arg)
      ).toString();
    }

    this.displayValue();
  }
}
