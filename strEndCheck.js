let strEndCheck = (str1,str2) => {
   let str1End =  str1.slice(-(str2.length));
   if(str1End === str2) {
       return true
   } else {
       return false
   }
}
console.log(strEndCheck('siddharth', 'rth'));
