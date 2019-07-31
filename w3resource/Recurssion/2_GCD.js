let gcdFinder = (a,b) => {
    return (!b) ? a : gcdFinder(b, a % b)
}

console.log(gcdFinder(50,25));

//expanded form
let gcd = (x, y) => {
    if ( !y ) {
        return x
    } else {
        return gcd(y, x % y)
    }
}

console.log(gcd(7,13));
