let nearToTonCheck = (x, y) => {
  let xD = Math.abs(100 - x);
  let yD = Math.abs(100 - y);

  if (xD === yD) {
    return 'Both are equally near'
  } else {
    if (xD > yD) {
      return y + ' is nearest'
    } else if (yD > xD) {
      return x + ' is largest'
    }
  }
}

console.log(nearToTonCheck(90, 89));
console.log(nearToTonCheck(-90, -89));
console.log(nearToTonCheck(90, 90));
