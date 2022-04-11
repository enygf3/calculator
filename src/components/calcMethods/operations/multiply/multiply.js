export default class multiply {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = this.props.currentValue, prev = this.props.prevValue) {
    if (value && prev) {
      this.props.currentValue = (Number(prev) * Number(value)).toString();
      this.props.prevValue = "";
      this.displayValue();

      let result;
      return (result = this.props.currentValue);
    }
  }
}
