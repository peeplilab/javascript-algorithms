let firstThree = (str) => {
  if(str.length < 3) {
    return str.toUpperCase()
  }

  let begin = str.substring(0,3).toLowerCase();
  let end   = str.substring(3)
  return begin + end;
}

console.log(firstThree('PYTHON'));
