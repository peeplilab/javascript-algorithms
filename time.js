//display output:-  Today is: Tuesday
//current time is : 10 PM : 30 : 38
let today = new Date();
let day = today.getDay();
let daylist = ['sun','mon','tue','wed','thur','fri','sat']
console.log(daylist[day]);
let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
let ampm = (hour >= 12)? " PM": " AM";
hour = (hour >= 12)? hour - 12 : hour;

if(hour ===0 && ampm === ' PM') {
    if(min === 0 && sec === 0) {
        hour = 12;
        ampm = ' Noon'
    } else {
        hour = 12;
        ampm = ' PM'
    }
}
if(hour === 0 && ampm === ' AM') {
    if(min === 0 && sec === 0) {
        hour = 12;
        ampm = ' midnight'
    } else {
        hour = 12;
        ampm = ' AM'
    }
}

console.log(`Current time is : ${hour}${ampm} : ${min}: ${sec}`);
