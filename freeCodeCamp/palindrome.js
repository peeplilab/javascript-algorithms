let palindrome = (str) => {
    str = str.slice(1, -1)
    console.log(str);
    
    if (str.length <= 1) {
        return true
    } else if (str[0] === str.slice(-1)) {
      console.log(str[0], '0');
      
        return palindrome(str.slice(1, -1))
    } else {
        return false
    }
}

console.log(palindrome('biilliib'));
