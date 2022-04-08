export default function changeValues() {
  this.props.history[0] = this.props.currentValue;
  this.props.prevValue = this.props.currentValue;
  this.props.currentValue = "0";
}
