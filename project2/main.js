const endTime = new Date('2020-12-31 23:59:59').getTime();
const spanDays = document.querySelector('span.d');
const spanHours = document.querySelector('span.h');
const spanMinutes = document.querySelector('span.m');
const spanSecunds = document.querySelector('span.s');

function a(){
    const nowTime = new Date().getTime();
    let days = (endTime/(1000*60*60*24)) - (nowTime/(1000*60*60*24));
    let hours = Math.floor(((endTime/(1000*60*60)) - (nowTime/(1000*60*60)))%24);
    hours = hours < 10 ? `0${hours}` : hours;
    let minutes = Math.floor(((endTime/1000*60) - (nowTime/1000*60))%60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let secunds = Math.floor(((endTime/1000) - (nowTime/1000))%60);
    secunds = secunds < 10 ? `0${secunds}` : secunds;
    spanDays.textContent = (days.toFixed());
    spanHours.textContent = (hours);
    spanMinutes.textContent = (minutes);
    spanSecunds.textContent = (secunds);
}
setInterval(a,1000)
