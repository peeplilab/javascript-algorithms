let oddEven = (n) => {
  for( let i =1; i <=n; ++i ) {
    if ( i % 2 === 0 ) {
      console.log( i + 'is even');      
    } else {
      console.log( i + 'is odd');      
    }
  }
}

oddEven(25)

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

//oddEvenFinder()