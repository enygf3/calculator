export default class oneDivideX {
  constructor(props) {
    this.calculator = props;
  }
  execute() {
    if (this.props.prevValue !== "0" && this.props.prevValue) {
      this.props.currentValue = (1 / Number(this.props.prevValue)).toString();
    }
    this.displayValue();
  }
}
