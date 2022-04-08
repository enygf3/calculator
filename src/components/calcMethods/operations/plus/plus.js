export default class plus {
  constructor(props) {
    this.calculator = props;
  }

  execute() {
    console.log(this);
    this.props.currentValue = (
      Number(this.props.prevValue) + Number(this.props.currentValue)
    ).toString();
    this.props.prevValue = "";
    console.log(this.props.currentValue);
    this.displayValue();
  }
}
