const removeEveryOther = (arr) => arr.filter((elem, index) => !(index % 2));

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
