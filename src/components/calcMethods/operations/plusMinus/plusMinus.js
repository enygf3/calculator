export default class plusMinus {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = Number(this.props.currentValue) * -1;
    this.displayValue();
  }
}
