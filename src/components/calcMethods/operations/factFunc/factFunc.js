const factFunc = (num) => {
  return num > 0 ? num * factFunc(num - 1) : 1;
};

export default factFunc;
