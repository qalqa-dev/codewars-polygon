const firstArray = [10, 20, 10, 2];
const secondArray = [10, 25, 5, -2];

const solution = function (firstArray, secondArray) {
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {
        sum += Math.pow(firstArray[i] - secondArray[i], 2);
    }
    return sum / firstArray.length;
};

console.log(solution(firstArray, secondArray));
