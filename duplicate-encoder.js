function duplicateEncode(word) {
  const map = new Map();

  for (char of word.toLowerCase()) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return word
    .split('')
    .map((e) => (map.get(e) > 1 ? ')' : '('))
    .join('');
}

console.log(duplicateEncode('adsadsad'));
