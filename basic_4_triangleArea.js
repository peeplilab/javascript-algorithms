let area = (b,h) => {
    console.log(0.5 * b * h);

}
area(3,4)

//sides x,y,z
let area2 = (x,y,z) => {
    let peri = (x+y+z) / 2;
    console.log(Math.sqrt(peri*((peri -x)*(peri-y)*(peri-z))))
    
}
area2(3,4,5)