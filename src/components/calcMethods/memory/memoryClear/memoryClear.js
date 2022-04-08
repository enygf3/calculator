export default class memoryClear {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    this.props.memory = "0";
  }
}
