//function that displays the value of the calculator
export default function displayValue(arg = this.props.currentValue) {
  document.querySelector(".display-content").innerHTML = arg;

  return arg.toString();
}
