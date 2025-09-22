function array(string) {
  // return string.split(',').length > 2
  //   ? string
  //       .split(',')
  //       .filter((e, idx) => idx !== 0 && idx !== string.split(',').length - 1)
  //       .join(' ')
  //   : null;

  return string.split(',').slice(1, -1).join(' ') || null;
}

console.log(array('A1,B2'));
