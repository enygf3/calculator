export default class plusMinus {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = this.props.currentValue) {
    this.props.currentValue = Number(value) * -1;
    this.displayValue();

    let result;
    return (result = this.props.currentValue);
  }
}
