//display output:-  Today is: Tuesday
//current time is : 10 PM : 30 : 38

let displayTime = () => {
    let dayNumber = new Date().getDay();
    let dayList = ['sun','mon','tue','wed','thu','fri','sat'];
    console.log(dayList[dayNumber]);   
     
    let today = new Date();
    let hours = today.getHours();
    let mins  = today.getMinutes();
    let secs  = today.getSeconds();
    let ampm  = (hours <= 12)? 'AM':'PM';
    let hour  = (hours >= 12)? hours - 12: hours;

    if(hour === 0 && ampm === 'PM') {
        if( mins === 0 && secs === 0 ) {
            hour = 12;
            ampm = 'NOON';
        } else {
            hour = 12;
            ampm = 'PM'
        }
    }
    if(hour === 0 && ampm === 'AM') {
        if( mins === 0 && secs === 0) {
            ampm = 'MIDNIGHT';
            hour = 12;
        } else {
            hour = 12;
            ampm = 'AM'
        }
    }
    console.log('curent time iss ' + hour + ampm + mins + secs);

}
displayTime()
