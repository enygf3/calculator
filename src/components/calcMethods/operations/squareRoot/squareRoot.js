export default class squareRoot {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = (
      Number(this.props.currentValue) ** 0.5
    ).toString();

    this.displayValue();
  }
}
