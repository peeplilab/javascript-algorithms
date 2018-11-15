let  daysLeft  = () => {
    let currentDate = new Date();
    let xmas = new Date(currentDate.getFullYear(), 11, 25);
    if(currentDate.getMonth() === 11 && currentDate.getDate() > 26) {
        xmas.setFullYear(xmas.getFullYear() + 1)
    }
    let oneDay = 1000 * 60 * 60 * 24; //ms * sec * min * hour       
    console.log(Math.ceil( xmas.getTime() - currentDate.getTime()) / (oneDay));
    
}
daysLeft()