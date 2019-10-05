//larger of two in raneg 40 - 60.

let biggerOfTwo = (x, y) => {
  if( x >= 40 && x <= 60 && y >= 40 && y <= 60) {
    if( x > y) {
      return 'x is greater'
    } else {
      return 'y is greater'
    }
  } else {
    return 'no'
  }
}

console.log(biggerOfTwo(55, 45));
console.log(biggerOfTwo(45, 60));
console.log(biggerOfTwo(25, 60));
console.log(biggerOfTwo(45, 80));


