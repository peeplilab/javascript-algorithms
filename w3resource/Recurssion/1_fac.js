function factorial(x) {
    if(x === 0) {
        return 1;
    }
    return x * factorial(x - 1)
}

console.log(factorial(33))

//factorial 
let fac = (n) => {
    return (n === 0) ? 1: n * fac( n - 1)
}

console.log(fac(33))

//add first 10 numbers with recur
let addFirstTen = (n) => {
    if(n === 1) {
        return 1;
    } 
    return n + addFirstTen(n - 1)
}
console.log(addFirstTen(10));

