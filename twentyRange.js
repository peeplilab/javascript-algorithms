let twentyRange = (n) => {
    if(Math.abs(100 - n <= 20) ) {
        return true
    } else if(Math.abs(400 <= n )) {
        return true
    } else {
        return false
    }
}
console.log(twentyRange(120));
