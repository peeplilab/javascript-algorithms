let ifString = (str) => {
  return (typeof str === 'string') ? true : false
}

console.log(ifString('dghfdgh'))

//sol2 toString returns object type
let strIs = (str) => {
  return (Object.prototype.toString.call(str) === '[object String]') ? true : false
}

console.log(strIs(['awerfawsf']));


function isStr(str) {
  if (Object.prototype.toString.call(str) === '[object String]') {
    return true;
  } else {
    return false;
  }
}

console.log(isStr('egege'));
