export default function xPowY(arg = this.props.currentValue) {
  if (this.props.prevValue) {
    this.props.currentValue = (Number(this.props.prevValue) ** arg).toString();
  }

  this.displayValue();
}
