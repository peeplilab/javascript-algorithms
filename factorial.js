let factorial = (n) => {
    if(n===1) {
        return true
    }
    else{
        return n * factorial(n - 1)
    }
}
console.log(factorial(62))