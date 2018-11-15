let changePosition = (str) => {
   // let x = str.split(''); //.slice(1,-1);
    let first = str[0];
    let last = str[str.length - 1]
    //console.log(last);
    let mid = str.slice(1,-1)
    console.log(last+mid+first);
    
}
changePosition('hi')