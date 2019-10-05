let timesChecker = (str, char) => {
  let times = 0; 
  for(let i = 0; i < str.length; i++) {
    if(str.charAt(i) === char) {
      times++;
    }
  }
  if(times >= 2 && times <= 4) {
    return true
  } else {
    return false
  }
}

console.log(timesChecker('helllllo', 'l'))