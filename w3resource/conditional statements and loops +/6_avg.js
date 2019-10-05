let avgFinder = (...marks) => {
  let total = marks.reduce((x,y ) => x+y );
  let avg =  (total/marks.length)
  if(avg < 60) {
    return 'F'
  } else if(avg < 70) {
    return 'D'
  } else if(avg < 80) {
    return 'C'
  } else if(avg < 90) {
    return 'B'
  } else {
    return 'A'
  }
}

console.log(avgFinder(80,77,88,95,68));
