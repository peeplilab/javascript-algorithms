let fnName = (str, n) => {
  function fn(input) {
    return input.slice(0, n)
  }
  return ((str.constructor === String) && (n > 0)) ? fn(str) : false
}

console.log(fnName('abcdefgh', 3));

// truncate_string = function (str1, length) {
  
//   if ((str1.constructor === String) && (length>0)) {
//       return str1.slice(0, length);
//   }
// };
// console.log(truncate_string("Robin Singh",4));
