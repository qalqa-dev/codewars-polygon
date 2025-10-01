function count(string) {
  const map = new Map();
  string.split('').forEach((e) => map.set(e, (map.get(e) || 0) + 1));
  return Object.fromEntries(map);
}

console.log(count('abcccdd'));
