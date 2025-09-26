function nbYear(p0, percent, aug, p) {
  let years = 0;
  let population = p0;
  const percentAsDecimal = percent / 100;

  while (population < p) {
    population = Math.floor(population * (1 + percentAsDecimal) + aug);
    years++;
  }

  return years;
}
