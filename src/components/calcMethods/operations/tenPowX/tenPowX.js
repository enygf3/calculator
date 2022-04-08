export default class tenPowX {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = (
      Number(10) ** this.props.currentValue
    ).toString();

    this.displayValue();
  }
}
