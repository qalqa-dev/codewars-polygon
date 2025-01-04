function solution(X) {
    let gcd = X[0];
    for (let i = 1; i < X.length; i++) {
        gcd = gcdTwoNumbers(gcd, X[i]);
    }
    return gcd * X.length;
}

function gcdTwoNumbers(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(solution([6, 9, 21]));
