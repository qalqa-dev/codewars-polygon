function digitize(n) {
    return n
        .toString()
        .split('')
        .reverse()
        .map((int) => parseInt(int));
}

console.log(digitize(35231));
