let sundayChecker = (from, to) => {
    for(let i = from; i<=to; i++) {
        let day = new Date(i,0,1)
        if(day.getDay() === 0) {
            console.log(`${i} is sunday yay`);            
        }
    }
}
sundayChecker(2014,2050)
