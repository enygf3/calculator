export default class minus {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = Number(
      Number(this.props.prevValue) - Number(this.props.currentValue)
    ).toString();
    this.props.prevValue = "";
    this.displayValue();
  }
}
