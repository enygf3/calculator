//function that calculates the cubic root of a number
export default class cubicRoot {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = this.props.currentValue) {
    this.props.currentValue = (Number(value) ** (1 / 3)).toFixed(0).toString();

    this.displayValue();

    return this.props.currentValue;
  }
}
