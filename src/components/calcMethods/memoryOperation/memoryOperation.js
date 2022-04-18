export default function memoryOperation(value) {
  const data = new Map([
    ["M+", this.memoryPlus.bind(this)],
    ["M-", this.memoryMinus.bind(this)],
    ["MR", this.memoryRead.bind(this)],
    ["MS", this.memorySave.bind(this)],
    ["MC", this.memoryClear.bind(this)],
  ]);

  data.get(value)();
}
