let fndBiggest = (x, y, z) => {
  let maxNum = 0;
  if( x > y ) {
    maxNum = x;
  } else {
    maxNum = y;
  }
  if( y > maxNum) {
    maxNum = y;
  }
  return maxNum;
};
console.log(fndBiggest(343, 53, 3));
