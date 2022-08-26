const btn1 = document.getElementById('throttleBtn');

function handler() {
    console.log('✔ Throttle run..')
}

const throttle = (callback, delay) => {
    let throttleTimerExist;
    return function () {
        console.log('click event called');
        if (throttleTimerExist) return;
        setTimeout(() => {
            callback();
            throttleTimerExist = false;
        }, delay);
        throttleTimerExist = true;
    }
}

// less used way
const throttle2 = (callback, delay) => {
    let last = 0;
    return function () {
        console.log('click event called');
        const now = new Date().getTime();
        console.log('now', now, now-last,delay);
        if (now-last < delay) return;
        last = now;
        return callback();
    }
}
btn1.addEventListener('click', throttle(handler, 2000));

