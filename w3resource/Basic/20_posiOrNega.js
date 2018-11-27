let posiOrNega = (n,m) => {
    if (n < 0 &&  m > 0 || n > 0 && m < 0) {
        return true
    } else {
        return false
    }
}
console.log(posiOrNega(4,3));
