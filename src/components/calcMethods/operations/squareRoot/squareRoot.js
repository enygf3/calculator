//function that calculates the square root of a number
export default class squareRoot {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = Number(this.props.currentValue)) {
    if (!isNaN(value)) {
      this.props.currentValue = (value ** 0.5).toString();

      this.displayValue();
    }

    return this.props.currentValue;
  }
}
