export default class oneDivideX {
  constructor(props) {
    this.calculator = props;
  }
  execute() {
    this.props.currentValue = (1 / Number(this.props.currentValue)).toString();
    this.displayValue();
  }
}
