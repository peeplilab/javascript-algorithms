function repeatStringNumTimes(str, num) {
    let accumulatedStr = '';
     while(num > 0) {
         accumulatedStr +=str;
         num--
     }
     return accumulatedStr;
  }

  console.log(repeatStringNumTimes('heeell', 4));
  