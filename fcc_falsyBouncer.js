//remove falsy values from array
let removeF = (arr) => {

    return arr.filter(Boolean);
}
console.log(removeF([7, "ate", "", false, 9]));
