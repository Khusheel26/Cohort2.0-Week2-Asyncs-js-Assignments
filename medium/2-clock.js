function getTime() {
    let timer = new Date();

    let hours = timer.getHours();
    let minutes = timer.getMinutes();
    let seconds = timer.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    let timeFormat = (hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours - 12 : hours;
    hours = (hours === 0) ? 12 : hours;

    console.log(`${hours}:${minutes}:${seconds}`);
}

getTime();
timerId = setInterval(() => {
    getTime();
}, 1000);

// setTimeout(() => {
//     clearInterval(timerId);
// }, 60000);
