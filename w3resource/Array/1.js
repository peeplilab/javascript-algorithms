//check of arg is array
let argChecker = (arr) => {
if (Object.prototype.toString.call(arr) === '[object Array]') {
  return true;  
  }
  return false;
}
  
console.log(argChecker([3,3,4,4,4]))

