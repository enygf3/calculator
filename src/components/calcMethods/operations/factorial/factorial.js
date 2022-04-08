export default class factorial {
  constructor(props) {
    this.calculator = props;
  }

  execute(arg) {
    return arg !== 1 ? arg * this.factorial(arg - 1) : 1;
  }
}
