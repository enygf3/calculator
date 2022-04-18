export default class percent {
  constructor(props) {
    this.calculator = props;
  }

  execute(
    value = Number(this.props.currentValue),
    prev = Number(this.props.prevValue)
  ) {
    if (!isNaN(value) && !isNaN(prev)) {
      this.props.currentValue = ((prev * value) / 100).toString();
      this.props.prevValue = "";
      this.displayValue();
    }

    let result;
    return (result = this.props.currentValue);
  }
}