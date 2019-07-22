let largestFive = (a,b,c,d,e) => {
    if(a>b && a>c && a>d && a>e) {
        console.log('a biggest') 
        } else if(b>a && b>c && b>d && b>e) {
        console.log('b bigeest') 
        } else if(c>a && c>b && c>d && c>e) {
        console.log('c bieegst') 
        } else if( d>a && d>b && d>c && d>e){
        console.log('d biggest') 
        } else if(e>a && e>b && e>c && e>d ){
        console.log(' e biggest ') 
       
    }
}

largestFive(2,2,2,3,2)