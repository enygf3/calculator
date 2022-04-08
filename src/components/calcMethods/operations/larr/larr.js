export default class larr {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    if (this.props.currentValue.length > 0) {
      this.props.currentValue =
        this.props.currentValue.slice(0, this.props.currentValue.length - 1) ||
        "0";
    }

    this.displayValue();
  }
}
