//sum the multiples of 3 and 5 under 1000

let sum = (x,y) => {
    let i, j = 1000;
    let sum = 0;
    for (i = 1; i < j; i++) {
    sum = i + sum;
    }
    return sum;
}

console.log(sum(3,5));
