//function that powers a number to the 3rd power
export default class xPow3 {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = this.props.currentValue) {
    this.props.currentValue = (Number(value) ** 3).toString();

    this.displayValue();

    let result;
    return (result = this.props.currentValue);
  }
}
