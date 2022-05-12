import factFunc from "../factFunc/factFunc";

//main function for factorial
export default class factorial {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = this.props.currentValue) {
    this.props.currentValue = factFunc(Number(value)).toString();
    this.displayValue();

    return this.props.currentValue;
  }
}
