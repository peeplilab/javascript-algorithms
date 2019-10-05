let fizzBuzz = (n) => {
  for( let i = 1; i<=n; i++) {
    if( i % 3 === 0 && i % 5 === 0 ) {
      console.log( i + ' Fizzbuzz')
    } else if(i % 5 === 0 ) {
      console.log( i + ' Buzz')
    } else if(i % 3 === 0) {
      console.log( i + ' Fizz')
    }
  }
}

console.log(fizzBuzz(100));
