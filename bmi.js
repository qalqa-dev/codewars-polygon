function bmi(w, h) {
  const index = w / h ** 2;
  console.log(w, h, index);

  switch (true) {
    case index <= 18.5:
      return 'Underweight';
    case index > 18.5 && index <= 25:
      return 'Normal';
    case index > 25 && index <= 30:
      return 'Overweight';
    default:
      return 'Obese';
  }
}

console.log(bmi(100, 2.0));
