function mergeArrays(a, b) {
  const c = [];
  let a_index = 0,
    b_index = 0;

  while (a.length > a_index || b.length > b_index) {
    if (a.length > 0 && a[a_index] === c[c.length - 1]) {
      a_index++;
      continue;
    } else if (b.length > 0 && b[b_index] === c[c.length - 1]) {
      b_index++;
      continue;
    }
    if (a.length > a_index && b.length > b_index) {
      if (a[a_index] < b[b_index]) {
        c.push(a[a_index]);
        a_index++;
      } else if (a[a_index] > b[b_index]) {
        c.push(b[b_index]);
        b_index++;
      } else {
        c.push(a[a_index]);
        a_index++;
        b_index++;
      }
    } else if (a.length <= a_index) {
      c.push(b[b_index]);
      b_index++;
    } else if (b.length <= b_index) {
      c.push(a[a_index]);
      a_index++;
    }
  }
  return c;
}

// console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
