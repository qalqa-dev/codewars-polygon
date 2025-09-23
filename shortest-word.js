function findShort(s) {
  return s
    .split(' ')
    .map((e) => e.length)
    .reduce((min, current) => (current < min ? current : min));
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
