//main.js

//Countdown timer function
function countdown() {

    //gets the input from user
    var seconds = document.getElementById("seconds").value;

    //function to perfomr the countdown   
    function tick() {
        seconds = seconds - 1;
        timer.innerHtML = seconds;
        
        if (seconds > 1) {
            setTimeout(tick, 1000);

        } else (seconds < 0) {
            alert("Time is up!");
        }
    }

    tick();
}


