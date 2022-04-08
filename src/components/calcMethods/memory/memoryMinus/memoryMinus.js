export default function memoryMinus() {
  this.props.memory = (
    Number(this.props.memory) - Number(this.props.currentValue)
  ).toString();
}
