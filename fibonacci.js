// function pow(x, n, I, mult) {
//     if (n === 0) {
//         return I;
//     } else if (n === 1) {
//         return x;
//     } else {
//         let y = pow(x, Math.floor(n / 2), I, mult);
//         y = mult(y, y);
//         if (n % 2) {
//             y = mult(x, y);
//         }
//         return y;
//     }
// }

// function identityMatrix(n) {
//     return Array.from({ length: n }, (_, i) =>
//         Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)),
//     );
// }

// function matrixMultiply(A, B) {
//     const BT = B[0].map((_, colIndex) => B.map((row) => row[colIndex]));
//     return A.map((rowA) =>
//         BT.map((colB) => rowA.reduce((sum, a, i) => sum + a * colB[i], 0)),
//     );
// }

// function fib(n) {
//     const F = pow(
//         [
//             [1, 1],
//             [1, 0],
//         ],
//         Math.abs(n),
//         identityMatrix(2),
//         matrixMultiply,
//     );
//     return BigInt(n >= 0 ? F[0][1] : -F[0][1]);
// }

function matrixMultiplyBigInt(A, B) {
    return [
        [
            A[0][0] * B[0][0] + A[0][1] * B[1][0],
            A[0][0] * B[0][1] + A[0][1] * B[1][1],
        ],
        [
            A[1][0] * B[0][0] + A[1][1] * B[1][0],
            A[1][0] * B[0][1] + A[1][1] * B[1][1],
        ],
    ];
}

function matrixExponentiationBigInt(A, n) {
    let result = [
        [1n, 0n],
        [0n, 1n],
    ];
    let base = A;

    while (n > 0) {
        if (n % 2n === 1n) {
            result = matrixMultiplyBigInt(result, base);
        }
        base = matrixMultiplyBigInt(base, base);
        n = n / 2n;
    }

    return result;
}

function fib(n) {
    n = BigInt(n);

    if (n === 0n) return 0n;
    if (n < 0n) {
        return (n % 2n === 0n ? -1n : 1n) * fib(-n);
    }

    const F = [
        [1n, 1n],
        [1n, 0n],
    ];

    const result = matrixExponentiationBigInt(F, n - 1n);
    return result[0][0];
}

console.log(fib(-1));

// console.log(12n);
