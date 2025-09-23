function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names.slice(0, names.length - 1).join(', ')} and ${
        names[names.length - 1]
      } like this`;
    default:
      return `${names.slice(0, 2).join(', ')} and ${
        names.slice(2).length
      } others like this`;
  }
}

console.log(likes([]));
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
