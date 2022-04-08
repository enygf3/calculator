export default class cubicRoot {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = (
      Number(this.props.currentValue) **
      (1 / 3)
    ).toString();

    this.displayValue();
  }
}
