
//using reduce

let largestNum = (arr) => {
    return arr.reduce((x,y) => {
        return Math.max(x,y)
    })
}
console.log(largestNum([3,4,122,2,333,8]));
