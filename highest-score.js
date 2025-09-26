function high(x) {
  const words = x.split(' ');
  const wordScores = words.map((el) =>
    el
      .split('')
      .map((e) => e.toLowerCase().charCodeAt(0) - 96)
      .reduce((acc, cur) => (acc += cur)),
  );

  return words[
    wordScores.indexOf(wordScores.reduce((max, cur) => (max > cur ? max : cur)))
  ];
}

console.log(high('man i need a taxi up to ubud'));
