export default class plusMinus {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    if (this.props.prevValue !== "0" && this.props.prevValue) {
      this.props.currentValue = Number(this.props.prevValue) * -1;
    }
    this.displayValue();
  }
}
