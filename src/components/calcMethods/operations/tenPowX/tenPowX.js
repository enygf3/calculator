export default class tenPowX {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = Number(this.props.currentValue)) {
    if (!isNaN(value)) {
      this.props.currentValue = (10 ** value).toString();

      this.displayValue();
    }

    let result;
    return (result = this.props.currentValue);
  }
}
