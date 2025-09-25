function persistence(num) {
  let multiplications = 0;
  let numArr = [...String(num)].map(Number);
  while (true) {
    if (numArr.length <= 1) break;

    numArr = [...String(numArr.reduce((acc, cur) => (acc *= cur)))].map(Number);
    multiplications++;
  }
  return multiplications;
}

console.log(persistence(4));
