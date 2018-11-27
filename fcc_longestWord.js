let lw = (str) => {
    let words = str.split(' ');
    let biggest = 0;
    for(let i = 0; i < words.length; i++) {
        if(words[i].length > biggest) {
            biggest = words[i].length
        }
    }
    return biggest
}

//console.log(lw('heeel heheh eheheh ehe hehehe '));

//using reduce
let longestWord = (str) => {
    return str.split(' ').reduce((x,y) => {
        return Math.max(x, y.length)
    }, 0)
}

console.log(longestWord('heee e regerg erg egergergerge'));
