function countSmileys(arr) {
  return arr.filter((e) => e.match(/[:;][-~]?[)D]/)).length;
}

console.log(countSmileys([':D', ':~)', ';~D', ':)']));
