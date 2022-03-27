export function romanToInteger(str) {
    let result = 0;
    let tmpSumm = getIntForChar(str[0]);
    for (let i = 1; i < str.length; i++) {
        let num = getIntForChar(str[i]);
        if (num > tmpSumm) {
            result -= tmpSumm;
        } else {
            result += tmpSumm;
        }
        tmpSumm = num;
    }
    return result + tmpSumm;
}

export function getIntForChar(char) {
    let s = 0;
    switch (char) {
        case 'I':
            s = 1;
            break;
        case 'V':
            s = 5;
            break;
        case 'X':
            s = 10;
            break;
        case 'L':
            s = 50;
            break;
        case 'C':
            s = 100;
            break;
        case 'D':
            s = 500;
            break;
        case 'M':
            s = 1000;
            break;
    }
    return s;
}
