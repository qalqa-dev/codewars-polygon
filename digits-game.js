function digPow(n, p) {
  const digits = [...String(n)].map(Number);
  let res = 0;
  for (digit of digits) {
    res += Math.pow(digit, p);
    p++;
  }
  return (res / n) % 1 === 0 ? res / n : -1;
}

console.log(digPow(46288, 3));
