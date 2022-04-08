export default class xPow3 {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = (Number(this.props.currentValue) ** 3).toString();

    this.displayValue();
  }
}
