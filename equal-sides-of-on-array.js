function findEvenIndex(arr) {
  for (let index in arr) {
    let leftSum = arr.slice(0, index).reduce((acc, cur) => (acc += cur), 0);
    let rightSum = arr.slice(+index + 1).reduce((acc, cur) => (acc += cur), 0);
    if (leftSum === rightSum) return +index;
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
