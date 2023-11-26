setInterval(displayTime, 1000);

function displayTime() {
    
    let currentTime = new Date;
    let hour = currentTime.getHours();
    let min = currentTime.getMinutes();
    let sec = currentTime.getSeconds();
    let amPM = "AM"
 
    let hourHTML = document.getElementById('hour');
    let minHTML = document.getElementById('min');
    let secHTML = document.getElementById('sec');
    let amPMHTML = document.getElementById('ampm');

    if (hour > 12) {
        hour -= 12;
        amPM = "PM"
    }

    function makeSingleToDoubleDigit(num) {
        if (num.toString().length == 1) {
            num = "0" + num
        }
        return num
    }
    sec = makeSingleToDoubleDigit(sec)
    min = makeSingleToDoubleDigit(min)
    hour = makeSingleToDoubleDigit(hour)

    hourHTML.innerHTML = hour;
    minHTML.innerHTML = min;
    secHTML.innerHTML = sec;
    amPMHTML.innerHTML = amPM
}
