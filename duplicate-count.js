function duplicateCount(text) {
  const charMap = new Map();
  const charArray = text.toLowerCase().split('');
  for (char of charArray) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  const arr = Array.from(charMap.values());
  return arr.filter((el) => el > 1).length;
}

console.log(duplicateCount('abc'));
