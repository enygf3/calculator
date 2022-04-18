export default function changeValues() {
  this.props.history = this.props.currentValue;
  this.props.prevValue = this.props.currentValue;
  this.props.currentValue = "0";
}
