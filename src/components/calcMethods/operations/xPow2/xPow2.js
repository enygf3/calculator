export default class xPow2 {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = this.props.currentValue) {
    this.props.currentValue = (Number(value) ** 2).toString();

    this.displayValue();

    let result;
    return (result = this.props.currentValue);
  }
}
