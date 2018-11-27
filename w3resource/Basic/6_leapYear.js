let leap = (year) => {
    let x = (year%100 === 0) ? false : year%4 === 0
    console.log(x);
    
}
leap(2344)