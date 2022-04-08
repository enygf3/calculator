export default function pushOperation(operation) {
  if (operation === "C") {
    this.clear();
  } else if (operation === "←") {
    this.larr();
  } else if (operation === "Back") {
    this.back();
  } else {
    if (
      this.props.currentValue &&
      this.props.prevValue &&
      this.props.operation
    ) {
      this.findOperation(this.props.operation);
      this.changeValues();
      this.props.operation = operation;
    } else {
      this.props.operation = operation;
      if (this.props.currentValue) {
        this.changeValues();
      }
    }
  }
}
