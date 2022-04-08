export default class percent {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    if (this.props.currentValue && this.props.prevValue) {
      this.props.currentValue = (
        (Number(this.props.prevValue) * Number(this.props.currentValue)) /
        100
      ).toString();
      this.props.prevValue = "";
      this.displayValue();
    }
  }
}
