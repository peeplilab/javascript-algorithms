let isFifty = (n,m) => {
    if ( n + m === 50)  {
        return true;
    }   else if(n || m === 50) {
        return true; 
    }
}
console.log(isFifty(50,25));
