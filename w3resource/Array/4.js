//return element from end of array
let retunNElementsFromEnd = (array, n) => {
return array.slice(Math.max(array.length - n, 0));  
  }

console.log(retunNElementsFromEnd([3,3,323232,32],2))
//console.log([33,3323,32323].slice(0,-1));
