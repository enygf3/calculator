import factFunc from "../factFunc/factFunc";

export default class factorial {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = factFunc(
      Number(this.props.currentValue)
    ).toString();
    this.displayValue();
  }
}
