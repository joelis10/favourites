const startStop = document.querySelector("#startStop");
const resetBtn = document.querySelector("#resetBtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMin = 0;
let leadingHour = 0;

let timerInterval = null
let timerStatus = "stopped"

function stopwatch() {
  seconds++;

  if (seconds / 60 == 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 == 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMin = "0" + minutes.toString();
  } else {
    leadingMin = minutes;
  }

  if (hours < 10) {
    leadingHour = "0" + hours.toString();
  } else {
    leadingHour = hours;
  }

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHour + ":" + leadingMin + ":" + leadingSeconds);
}

startStop.addEventListener('click', function(event) {
    if(timerStatus == "stopped") {
        timerInterval = window.setInterval(stopwatch, 1000)
        document.getElementById('startStop').innerHTML = "<i class='fa-solid fa-pause' id='pause'></i>"
        timerStatus = "started"
    } else {
        window.clearInterval(timerInterval)
        document.getElementById('startStop').innerHTML = "<i class='fa-solid fa-play' id='play'></i>"
        timerStatus = "stopped"
    }
})

resetBtn.addEventListener('click', function(event) {
    window.clearInterval(timerInterval)
    seconds = 0
    minutes = 0
    hours = 0
    
    document.getElementById('timer').innerText = "00:00:00"
})  