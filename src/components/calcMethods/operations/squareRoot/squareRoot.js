export default class squareRoot {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = this.props.currentValue) {
    this.props.currentValue = (Number(value) ** 0.5).toString();

    this.displayValue();

    let result;
    return (result = this.props.currentValue);
  }
}
