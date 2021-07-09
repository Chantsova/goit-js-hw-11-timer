const refs = {
    daysEl: document.querySelector("[data-value='days']"),
    hoursEl: document.querySelector("[data-value='hours']"),
    minsEl: document.querySelector("[data-value='mins']"),
    secsEl: document.querySelector("[data-value='secs']"),
}

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });


const timer = {
    start() {
        const startTime = new Date(2021, 10, 5, 12, 0, 0, 0);

        setInterval(() => {
            const currentTime = Date.now(); 
            const deltaTime = startTime - currentTime;
            const time = getTimeComponents(deltaTime);
            updateClockface(time);
}, 1000);
    },
};

timer.start();

function upda

function pad(value){
    return String(value).padStart(2, '0');
}

function getTimeComponents(time){
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

return {days, hours, mins, secs};
}