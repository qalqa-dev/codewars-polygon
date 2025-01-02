function add(num1, num2) {
    let result = '';
    let carry = 0;

    const maxLength = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLength, '0');
    num2 = num2.padStart(maxLength, '0');

    for (let i = maxLength - 1; i >= 0; i--) {
        const digitSum = parseInt(num1[i], 10) + parseInt(num2[i], 10) + carry;
        result = (digitSum % 10) + result;
        carry = Math.floor(digitSum / 10);
    }

    if (carry > 0) {
        result = carry + result;
    }

    return result;
}
console.log(add('63829983432984289347293874', '90938498237058927340892374089'));
