let truncateStr = (str, len) => {
   if(str.length <= len) {
       return str;
   } else if(str.length > len) {
    return str.slice(0, len) + '...'
   }

}
console.log(truncateStr('hel',3))