//function that adds numbers
export default class plus {
  constructor(props) {
    this.calculator = props;
  }

  execute(
    value = Number(this.props.currentValue),
    prev = Number(this.props.prevValue)
  ) {
    if (!isNaN(value) && !isNaN(prev)) {
      this.props.currentValue = (prev + value).toString();
      this.props.prevValue = "";
      this.displayValue();
    }

    return this.props.currentValue;
  }
}
