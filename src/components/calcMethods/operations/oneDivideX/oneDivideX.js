//function that divides one by x
export default class oneDivideX {
  constructor(props) {
    this.calculator = props;
  }
  execute(value = this.props.currentValue, prev = this.props.prevValue) {
    this.props.currentValue = (1 / Number(value)).toString();
    this.displayValue();

    return this.props.currentValue;
  }
}
