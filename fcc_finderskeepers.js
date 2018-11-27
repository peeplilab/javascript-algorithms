function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i<arr.length; i++) {
        num = arr[i]
        if(func(num)) {
            return num
        }
        
    }
    return undefined

    
  }
  
//console.log( findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));

//example 2 

let cond2 = (arr, func) => {
    let num =0;

    for(let i = 0; i<arr.length; i++) {
        num = arr[i];
        if(func(num)) {
            return true
        }
    }
    return undefined;
}   
console.log(cond2([3,4,5,6,7,8,9], (num) => {return num % 3 === 0;}));
