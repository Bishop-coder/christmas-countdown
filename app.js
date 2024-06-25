const dayTime = document.getElementById('day');
const hourTime = document.getElementById('hour');
const minTime = document.getElementById('min');
const secTime = document.getElementById('sec');

const christmasDate = new Date("Dec 25, 2024 00:00:00").getTime();

let timeInterval = setInterval(() => {
    const now = new Date().getTime();
    const lengthTill = christmasDate - now;

    const dayLength = Math.floor(lengthTill / (1000 * 60 * 60 * 24));
    const hourLength = Math.floor(lengthTill % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minLength = Math.floor(lengthTill % (1000 * 60 * 60) / (1000 * 60));
    const secLength = Math.floor(lengthTill % (1000 * 60) / (1000));

    dayTime.textContent = dayLength;
    hourTime.textContent = hourLength;
    minTime.textContent = minLength;
    secTime.textContent = secLength;

    if (lengthTill < 0){
        dayTime.textContent = "00";
        hourTime.textContent = "00";
        minTime.textContent = "00";
        secTime.textContent = "00";
    }
}, 1000);