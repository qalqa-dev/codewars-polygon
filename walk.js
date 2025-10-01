function isValidWalk(walk) {
  const pairs = {
    w: 'e',
    e: 'w',
    s: 'n',
    n: 's',
  };
  const map = new Map();

  walk.forEach((e) => map.set(e, (map.get(e) || 0) + 1));

  return (
    !walk.filter((e) => map.get(e) !== map.get(pairs[e])).length &&
    walk.length === 10
  );
}

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
