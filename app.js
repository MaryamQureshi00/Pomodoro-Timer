let timer = document.querySelector('.timer')
let play = document.getElementById('play')
let pause = document.getElementById('pause')
let reset = document.getElementById('reset')

let msec = 0;
let sec = 0;
let mins = 0;
let timerId = null;

play.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10)
});

pause.addEventListener('click', function () {
    clearInterval(timerId);
});

reset.addEventListener('click', function () {
    clearInterval(timerId);
    timer.innerHTML = `00:00:00`;
    msec = sec = mins = 0;
});

function startTimer() {
    msec++;
    if (msec == 200) {
        msec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            mins++;
        }
    }
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = sec < 10 ? `0${sec}` : sec;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timer.innerHTML = `${minsString} : ${secString} : ${msecString}`;
}



