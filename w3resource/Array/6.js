//insert dashes between two consecutive even numbers

let dashInserter = (numm) => {
  var num = numm.toString();
  let newArray = [num[0]];
  for(var i = 1; i < num.length-1; i++) {
    if((num[i - 1] % 2  === 0 ) && ( num[i] % 2)) {
      newArray.push( '-', num)
    } else {
      newArray.push(num)
    }
  }

}

console.log(dashInserter(23423452345234524))
  
