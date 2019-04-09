//range 50-99

let rangeChecker = (x,y) => {
  if((x >= 50 && x <= 99) || (y >= 50 && y<= 99) ) {
    return true
  } 
  return false
}

console.log(rangeChecker(5,88))