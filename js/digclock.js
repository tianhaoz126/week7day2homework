function currentTime() {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm;
    var utchr = d.getUTCHours(); 
    var timeDiff = hr - utchr;
    var adjTimeDiff = Math.abs(timeDiff);
    var timeZone;
    if (utchr > 12) {
        utchr -= 12;
    }
    switch (adjTimeDiff) {
        case 4: 
            timeZone = "ET"; 
            break;
        case 5: 
            timeZone = "CT"; 
            break;
        case 6: 
            timeZone = "MT"; 
            break;
        case 7: 
            timeZone = "PT"; 
            break;
        default: 
            timeZone = "";
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    if (min < 10) {
        min= "0" + min;
    }
    if (hr == 12) {
        ampm = "PM";
    } else if (hr > 12) {
        hr -= 12;
        ampm = "PM";
    }
    else {
        ampm = "AM";
    }

    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    document.getElementById("clock").innerText = time;

    setInterval(currentTime, 1000);
}

currentTime()