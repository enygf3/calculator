export default class xPow2 {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = (Number(this.props.currentValue) ** 2).toString();

    this.displayValue();
  }
}
