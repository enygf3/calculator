export default function root(arg = this.props.currentValue) {
  if (this.props.prevValue) {
    this.props.currentValue = (
      Number(this.props.prevValue) **
      (1 / arg)
    ).toString();
  }

  this.displayValue();
}
