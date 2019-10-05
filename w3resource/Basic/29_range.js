//int in range 50 - 99

function checkRange(a, b, c) {
  return (a > 50 && a < 99) || (b > 50 && b < 99) || (c > 50 && c < 50)
}
console.log(checkRange(34,343,43));

//cechkRange 
function rangeCheck(a,b,c) {
  return (a > 50 && a <= 99) || (b> 50 && b <= 99) || (c > 50 && c <=99)
}

console.log(rangeCheck(50, 90, 99));
console.log(rangeCheck(5, 9, 199));
console.log(rangeCheck(65, 89, 199));
console.log(rangeCheck(65, 9, 199));