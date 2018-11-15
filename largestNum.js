let largestNum = (arr) => {
    let largest = [];
    for( let i = 0; i< arr.length; i++) {
        let largestNum = arr[i][0];
        for(let j = 1; j<arr[i].length; j++) {
            if(arr[i][j] > largest) {
                largestNum = arr[i][j]
            }
        }
        largest[i] = largestNum;
    }
    return largest
}

console.log(largestNum([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
