export default function getValue(value) {
  if (this.props.currentValue === "0") {
    this.props.currentValue = value;
  } else {
    this.props.currentValue += value;
  }

  this.displayValue();
}
