let repeatStr = (str, num) => {
    let finalStr = '';
    while (num > 0) {
        finalStr += str;
        num--
    }
    return finalStr;
}
//console.log(repeatStr('fck', 4));

//using for

let strRepeat = (str, n) => {
    let final = '';
    for(let i = 0; i < n; i++ ) {
        final +=str
    }
    return final
}
console.log(repeatStr('fck', 4));
