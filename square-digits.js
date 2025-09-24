function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map((e) => Math.pow(parseInt(e), 2))
      .join(''),
  );
}

console.log(squareDigits(9119));
