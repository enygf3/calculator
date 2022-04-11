export default class tenPowX {
  constructor(props) {
    this.calculator = props;
  }

  execute(value = this.props.currentValue) {
    this.props.currentValue = (Number(10) ** value).toString();

    this.displayValue();

    let result;
    return (result = this.props.currentValue);
  }
}
