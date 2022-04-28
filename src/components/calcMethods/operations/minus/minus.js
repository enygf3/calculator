//function that subtracts two numbers
export default class minus {
  constructor(props) {
    this.calculator = props;
  }

  execute(prev = this.props.prevValue, value = this.props.currentValue) {
    this.props.currentValue = Number(Number(prev) - Number(value)).toString();
    this.props.prevValue = "";
    this.displayValue();

    let result;
    return (result = this.props.currentValue);
  }
}
