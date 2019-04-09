//check if string starts from java

function checkIfJava(str) {
  if(str.length < 4) {
    return false
  }
  else if(str.startsWith('Java') ) {
    return true;
  }
  return false
}

console.log(checkIfJava('Java'))