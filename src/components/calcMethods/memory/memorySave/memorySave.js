export default class memorySave {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.memory = this.props.currentValue;
  }
}
