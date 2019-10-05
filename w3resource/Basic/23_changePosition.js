let changePosition = (str) => {
   // let x = str.split(''); //.slice(1,-1);
    let first = str[0];
    let last = str[str.length - 1]
    //console.log(last);
    let mid = str.slice(1,-1)
    console.log(last+mid+first);
    
}
//changePosition('hello')

//sol 2
let changeChar = (str) => {
    if (str.length <= 1) {
        return str;
    }
    let midChar = str.substring(1, str.length - 1);
    return (str.charAt(str.length - 1)) + midChar + str.charAt(0)
}
//console.log(changeChar('hello'));


//remove 1st and last character in string
let radicalRemover =  (str) => {
  if(str.length < 1) {
    return 'enter proper string'
  }
  return str.slice(1, str.length-1);
}

console.log(radicalRemover('gegege'));
