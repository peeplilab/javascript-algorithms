let brea = (arr, n) => {
    let finalArr = [];
    for(let i = 0; i <arr.length; i+=n) {
       finalArr.push(arr.slice(i, n+i))
    }
    return finalArr;
}
console.log(brea([3,4,3,34,24,4], 2));
 