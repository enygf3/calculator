export default class plusMinus {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = Number(this.props.currentValue)) {
    if (!isNaN(value)) {
    }
    this.props.currentValue = (value * -1).toString();
    this.displayValue();

    let result;
    return (result = this.props.currentValue);
  }
}
