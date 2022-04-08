export default class back {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = this.props.history[0];
    this.props.history[0] = "0";
    this.displayValue();
  }
}
