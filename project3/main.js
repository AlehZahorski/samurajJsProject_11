const btnStart = document.querySelector('button.main');
const btnReset = document.querySelector('button.reset');
const div = document.querySelector('.time div');

let msec = 0;
let sec = 0;
let min = 0;
let flag = false;
let startTimer;

const timer = () =>{
    msec++;
    div.textContent = msec < 10 ? `0${min}:0${sec}:0${msec}` : `${min}:${sec}:${msec}`
    if(msec%100 === 0){
        msec = 0;
        sec++;
        if(sec%60 ===0){
            sec = 0;
            min++;
        }
    }
}

const start = () => {
    
    if(!flag){
        startTimer = setInterval(timer, 10);
        flag = !flag
        div.textContent = '';
        btnStart.textContent = 'Paused';
    }else{
        flag = !flag
        btnStart.textContent = 'Start';
        clearInterval(startTimer);
    }

    btnReset.addEventListener('click', ()=>{
        flag = false;
        clearInterval(startTimer);
        btnStart.textContent = 'Start';
        sec = 0;
        msec = 0;
        div.textContent = '---';
    })
    
}

btnStart.addEventListener('click', start)


