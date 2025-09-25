// function validatePIN(pin) {
//   return (pin.length === 4 || pin.length === 6) && /^\d+$/.test(pin);
// }

let str = 'middle';

console.log(
  str.length % 2 === 0
    ? str.slice(Math.floor(str.length / 2) - 1, Math.floor(str.length / 2) + 1)
    : str[Math.floor(str.length / 2)],
);
