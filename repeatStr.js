let repeatStr = (str, num) => {
    let finalStr = '';
    while (num > 0) {
        finalStr += str;
        num--
    }
    return finalStr;
}
console.log(repeatStr('fck', 4));