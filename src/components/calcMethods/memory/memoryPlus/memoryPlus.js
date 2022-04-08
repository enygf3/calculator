export default function memoryPlus() {
  this.props.memory = (
    Number(this.props.memory) + Number(this.props.currentValue)
  ).toString();
}
