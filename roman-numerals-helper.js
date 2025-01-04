class RomanNumerals {
    static romanMap = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];
    static toRoman(num) {
        let result = '';
        for (const { value, symbol } of this.romanMap) {
            while (num >= value) {
                result += symbol;
                num -= value;
            }
        }
        return result;
    }

    static fromRoman(str) {
        let num = 0;
        let i = 0;
        for (const { value, symbol } of RomanNumerals.romanMap) {
            while (str.startsWith(symbol, i)) {
                num += value;
                i += symbol.length;
            }
        }
        return num;
    }
}

console.log(RomanNumerals.toRoman(1990));
console.log(RomanNumerals.fromRoman('XXI'));
