function findNb(m) {
  let n = 0;
  let sum = 0;

  while (sum < m) {
    n++;
    sum += n ** 3;
  }

  return sum === m ? n : -1;
}

console.log(findNb(1071225));
