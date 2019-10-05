let abbrv = (str) => {
  let wordsArr = str.trim().split(' ');
  return (str.length > 1) ? wordsArr[0] + ' ' + wordsArr[1].slice(0 , 1) : false;
  
}

console.log(abbrv('Rajkumar Khaitan'));

function abbrvName(str) {
  let wordsArr = str.split(' ');
  return (str.length > 1) ? wordsArr[0] + ' ' + wordsArr[1].charAt(0) : false
}

console.log(abbrvName('hello world'));
