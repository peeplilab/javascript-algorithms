let randomOp = (n) => {
    if (n > 13) {
        console.log(Math.abs((n - 13) * 2));
    } else {
        console.log( Math.abs(13 - n));
    }
}
randomOp(33)