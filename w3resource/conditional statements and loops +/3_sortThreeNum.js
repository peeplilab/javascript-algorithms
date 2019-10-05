let sortThree = (x, y, z) => {
    if (x > y && x > z) { //place one num to last position. here x
        if (y > z) { //place in 1st(y) and 2nd position (z)
            console.log(y + " " + z + " " + x)
        } else {
            console.log(z + " " + y + " " + x)
        }
    } else if (y > x && y > z) { // place one num in last psition. here y
        if (x > z) {
            console.log(x + " " + z + " " + y)
        } else {
            console.log(z + " " + x + " " + y)
        }
    } else if (z > x && z > y) {
        if (x > y) {
            console.log(y + " " + x + " " + z)
        } else {
            console.log(x + " " + y + " " + z)
        }
    }
};

//cooler example
//helper callback fn
function helper(a,b) {
  return a-b;
}

let sortit = (...x) => {
  return x.sort(helper)
};

console.log(sortit(3000,56464,45, 6456, 45));
