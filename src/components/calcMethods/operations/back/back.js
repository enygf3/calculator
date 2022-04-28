//function that cancels the last operation
export default class back {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = this.props.history;
    this.props.history = "0";
    this.displayValue();
  }
}
