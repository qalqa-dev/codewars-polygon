function solution(str, ending) {
  // for (let i = 1; i <= ending.length; i++) {
  //   if (str.split('')[str.length - i] !== ending.split('')[ending.length - i]) {
  //     return false;
  //   }
  // }
  // return true;

  return ending === str.substr(str.length - ending.length);
}

console.log(solution('abcde', 'de'));
console.log(solution('abcde', 'cde'));
