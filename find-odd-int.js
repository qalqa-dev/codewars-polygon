function findOdd(arr) {
  const map = new Map();

  for (digit of arr) {
    map.set(digit, (map.get(digit) || 0) + 1);
  }

  return Array.from(map)
    .filter((subArr) => subArr[1] % 2)
    .flat()[0];
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
