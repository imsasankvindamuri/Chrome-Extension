(function () {
    var secondsElapsed = 0;
    var _timer = null;
    const secondFunc = function () {
        console.log(secondsElapsed);
    };
    const focustime = function () {
        
        if (_timer) {
            return;
        }
        console.log("focus");
        _timer = setInterval(function () {
            secondsElapsed++;
            secondFunc();
        },1000);

        
        document.getElementById("time-indicator").innerHTML = 'focus time.'
    };
    const breaktime = function () {
        
        clearInterval(_timer);
        _timer = null;
        secondsElapsed = 0;


        console.log("break");
        document.getElementById("time-indicator").innerHTML = 'break time.'
    };
    const longbreaktime = function () {
        
        clearInterval(_timer);
        _timer = null;
        secondsElapsed = 0;


        console.log("long break");
        document.getElementById("time-indicator").innerHTML = 'long break time.'
    };

    const _pomo = {
        focustime,
        breaktime,
        longbreaktime,
    }

    console.log(_pomo);


    document.getElementById("focustime").addEventListener("click",_pomo.focustime);
    document.getElementById("breaktime").addEventListener("click",_pomo.breaktime);
    document.getElementById("longbreaktime").addEventListener("click",_pomo.longbreaktime);

}) ();