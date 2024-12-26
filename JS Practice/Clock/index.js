
function clock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var milliseconds = now.getMilliseconds();
    var period = "AM";

    if (hours >= 12) {
        period = "PM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    var Time = hours + ":" + minutes + ":" + seconds + ":" + milliseconds + ":" +period;
    document.getElementById("clock").innerHTML = Time;
}

setInterval(clock, 100);
clock();
