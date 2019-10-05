//if in range 40-60 or 70-100
//x and y 
let rangeCheck = (x, y) => {
  return ( (x >= 40 && x <= 60 && y >= 40 & y <= 60) ||
    (x >= 70 && x <= 100 && y >= 70 && y <= 100)
  ) ? 'yes' :  'no';
  
};

console.log(rangeCheck(44, 56));
console.log(rangeCheck(70, 95));
console.log(rangeCheck(50, 89));
