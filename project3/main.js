const btnStart = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const div = document.querySelector('.time div');

let msec = 0;
let sec = 0;

const timer = () =>{
    msec++;
    div.textContent = msec < 10 ? `${sec}:0${msec}` : `${sec}:${msec}`
    if(msec%100 === 0){
        msec = 0;
        sec++;
    }
}

const start = () => {
    div.textContent = '';
    btnStart.textContent = 'Paused';
    const startTimer = setInterval(timer, 10);
    btnReset.addEventListener('click', ()=>{
        clearInterval(startTimer);
        sec = 0;
        msec = 0;
        div.textContent = '---';
    })
}

btnStart.addEventListener('click', start)


