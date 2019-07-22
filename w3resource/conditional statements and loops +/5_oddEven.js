let oddEven = (...args) => {
    args.forEach( x => {
        if(x === 0) {
            console.log('eve')
        } else if(x % 2 === 0) {
            console.log( 'eve')
        } else {
            console.log('odd');
            
        }
    })
}

oddEven(6,5,56,65,6)
