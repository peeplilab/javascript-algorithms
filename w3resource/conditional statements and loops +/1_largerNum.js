let largerNum = (x,y) => {
    if(parseInt(x,10) >parseInt(y, 10) ) return x;
    else if (parseInt(y,10) >parseInt(x, 10)) {
        return y
    } else {
    return "Both num are equal"        
    }
}

//console.log(largerNum(44,244.4))

//cooler solution
let biggerNum = (...nums) => {
    return Math.max(...nums)
}

console.log(biggerNum(3,3,23423,42,3423))
