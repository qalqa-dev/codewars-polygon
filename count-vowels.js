function getCount(str) {
  const map = new Map();
  const strArr = str.split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let counter = 0;

  for (char of strArr) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (vowel of vowels) {
    counter += map.get(vowel) || 0;
  }

  return counter;
}

console.log(getCount('o a kak ushakov lil vo kashu kakao'));
