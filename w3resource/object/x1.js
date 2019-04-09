let argChecker = (obj) => {
  if( Object.prototype.toString.call(obj) === "[object Object]") 
  return true;
  return false;
}

console.log(argChecker({a:1}))