//function that saves the current value of the calculator to the memory
export default class memorySave {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.memory = this.props.currentValue;
  }
}
