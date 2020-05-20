const endTime = new Date('2021-01-25 22:34:00').getTime();
const spanDays = document.querySelector('span.d');
const spanHours = document.querySelector('span.h');
const spanMinutes = document.querySelector('span.m');
const spanSecunds = document.querySelector('span.s');

function a(){
    const nowTime = new Date().getTime();
    const days = (endTime/(1000*60*60*24)) - (nowTime/(1000*60*60*24));
    const hours = ((endTime/(1000*60*60)) - (nowTime/(1000*60*60)))%24
    const minutes = ((endTime/1000*60) - (nowTime/1000*60))%60;
    const secunds = ((endTime/1000) - (nowTime/1000))%60;
    spanDays.textContent = (days.toFixed());
    spanHours.textContent = (hours.toFixed());
    spanMinutes.textContent = (minutes.toFixed());
    spanSecunds.textContent = (secunds.toFixed());
}
setInterval(a,1000)
