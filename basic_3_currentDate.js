let today = new Date();
let mon = today.getMonth() + 1;
let dat = today.getDate();
let yea = today.getFullYear();
if (dat < 10) {
    dat = `0${dat}`
}
if (mon < 10) {
    mon = `0${mon}`
}
console.log(`${mon}-${dat}-${yea}`);