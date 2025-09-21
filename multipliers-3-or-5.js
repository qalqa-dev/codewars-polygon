function solution(number) {
  let sum = 0;

  while (number > 0) {
    number--;
    checkMultiplier();
  }

  function checkMultiplier() {
    const lastDigit = number % 10;
    if (
      getDigitSumOfNumber(number) % 3 === 0 ||
      lastDigit === 5 ||
      lastDigit === 0
    ) {
      sum += number;
    }
    return sum;
  }

  return sum;
}

const getDigitSumOfNumber = (number) => {
  let numberDigitsSum = 0;

  while (number > 0) {
    numberDigitsSum += number % 10;
    number = Math.floor(number / 10);
  }

  return numberDigitsSum;
};

console.log(solution(5));
