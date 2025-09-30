function expandedForm(num) {
  return num
    .toString()
    .split('')
    .reverse()
    .map((e, i) => +e * 10 ** i)
    .filter((e) => e !== 0)
    .reverse()
    .join(' + ');
}

console.log(expandedForm(1002));
