//function that clears the calculator
export default class clear {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.currentValue = "0";
    this.props.prevValue = "";
    this.props.operation = null;
    this.props.history = "0";
    this.displayValue();
  }
}
