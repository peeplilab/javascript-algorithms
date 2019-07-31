//get int in range x,y

let getNums = (low,high) => {
    if( high - low === 2) {
        return [low + 1]
    } else {
        let list = getNums(low, high - 1);
        list.push(high - 1);
        return list
    }
};

console.log(getNums(4,33));

let getNum = (x,z) => {
    if( z - x === 2) {
        return [x + 1]
    } else {
        let list = getNum(x,z-1);        
        list.push(z - 1);
        return list;
    }
};

console.log(getNum(4,55));
