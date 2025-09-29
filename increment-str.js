function incrementString(str) {
  const splittedStr = str.split('');
  const numbers = [];

  for (let char of [...splittedStr].reverse()) {
    if (!+char && +char !== 0) {
      numbers.reverse();
      break;
    }

    numbers.push(char);
    if (numbers.length === str.length) {
      numbers.reverse();
      break;
    }
  }

  const string = str.slice(0, str.lastIndexOf(numbers.join('')));

  if (!numbers.length) return string + '1';

  let parsedNum = parseInt(numbers.join(''), 10);
  const resultNum = (++parsedNum).toString().padStart(numbers.length, '0');

  return string + resultNum;
}

console.log(incrementString('a009'));
