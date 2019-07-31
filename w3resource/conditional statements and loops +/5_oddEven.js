let oddEven = (...args) => {
    args.forEach(x => {
        if (x === 0) {
            console.log('eve')
        } else if (x % 2 === 0) {
            console.log('eve')
        } else {
            console.log('odd');

        }
    })
}

//oddEven(6,5,56,65,6)

//real sol
let oddEvenFinder = () => {
    for (let i = 0; i <= 15; ++i) {
        if (i === 0) {
            console.log(i + " is even")
        } else if (i % 2 === 0) {
            console.log(i + " is even");
        }
        else {
            console.log(i + " is odd");
        }
    }
}

oddEvenFinder()