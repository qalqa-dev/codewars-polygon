function toWeirdCase(string) {
    const splitByWords = string.split(' ');
    splitByWords.forEach((word, index) => {
        splitByWords[index] = word
            .split('')
            .map((char, index) =>
                index % 2 === 0 ? char.toUpperCase() : char.toLowerCase(),
            )
            .join('');
    });
    return splitByWords.join(' ');
}

console.log(toWeirdCase('UPPER CASE'));
