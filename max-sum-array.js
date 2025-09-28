const maxSequence = (arr) => {
  let maxSum = 0;
  let curSum = 0;

  for (item of arr) {
    curSum = Math.max(curSum + item, 0);
    maxSum = Math.max(curSum, maxSum);
    console.log(`${item},curSum: ${curSum}, maxSum: ${maxSum}`);
  }

  return maxSum;
};

console.log(
  maxSequence([
    7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
  ]),
);
