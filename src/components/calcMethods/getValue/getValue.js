//function that gets value from the input and pushing it to the current value
export default function getValue(value) {
  if (this.props.currentValue === "0") {
    this.props.currentValue = value;
  } else {
    this.props.currentValue += value;
  }

  this.displayValue();
}
