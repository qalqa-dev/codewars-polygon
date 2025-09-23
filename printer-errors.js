function printerError(s) {
  return `${
    s
      .split('')
      .map((e) => 'a' <= e && e <= 'm')
      .filter((e) => !e).length
  }/${s.length}`;
}

console.log(printerError('aaabbbbhaijjjmzxc'));
