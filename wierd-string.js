function toWeirdCase(string) {
  const words = string.split(' ');
  return words
    .map((word) => {
      return word
        .split('')
        .map((letter, index) => {
          return index % 2
            ? String(letter).toLowerCase()
            : String(letter).toUpperCase();
        })
        .join('');
    })
    .join(' ');
}

console.log(toWeirdCase('Nigga ni g a ss'));
