let add = (arr1, arr2, n) => {
    let sp = arr1.slice()
    for(let i = 0; i < arr1.length; i++) {
        sp.splice(n,0,arr1[i])
        n++
    }
    return sp;
}

console.log(add([2, 3, 4], ['a', 'c', 'v', 'f'], 2));