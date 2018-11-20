//returns the index at which the element should be inserted
let sorIns = (arr, n) => {
    let sorted = arr.sort((a,b) =>  ( a-b));
    let i = 0;

  while( n > sorted[i]) {
      i++
  }
  return i
}

console.log(sorIns([3,42,22,5,1], 44));
