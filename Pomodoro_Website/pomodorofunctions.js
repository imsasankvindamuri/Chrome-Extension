(function () {
    var secondsElapsed = 0;
    var timeMinsFocus = 25, timeMinsBreak = 5, timeMinsLongBreak = 15;



    var _timer = function (timeMins ,timeSecs = 0) {
        setInterval(function () {
            if (timeSecs < 0){  
                if (timeMins == 0){
                    clearInterval(_timer);
                    return;
                }
                timeMins--;
                timeSecs = 59;
            }
            const timeStamp = `${timeMins.toString().padStart(2,"0")} : ${timeSecs.toString().padStart(2,"0")}`;
            document.getElementById("time").innerHTML = timeStamp;
            timeSecs--;
        }, 1000);
    }


    const secondFunc = function () {
        console.log(secondsElapsed);
    };
    const focustime = function () {
        
        // if (_timer) {
        //     return;
        // }
        // console.log("focus");
        // _timer = setInterval(function () {
        //     secondsElapsed++;
        //     secondFunc();
        // },1000);

        _timer(timeMinsFocus); 
        document.getElementById("section-indicator").innerHTML = 'focus time.'
    };
    const breaktime = function () {
        
        // clearInterval(_timer);
        // _timer = null;
        // secondsElapsed = 0;


        // console.log("break");
        document.getElementById("section-indicator").innerHTML = 'break time.'
    };
    const longbreaktime = function () {
        
        // clearInterval(_timer);
        // _timer = null;
        // secondsElapsed = 0;


        // console.log("long break");
        document.getElementById("section-indicator").innerHTML = 'long break time.'
    };

    const _pomo = {
        focustime,
        breaktime,
        longbreaktime,
    }


    document.getElementById("focustime").addEventListener("click",_pomo.focustime);
    document.getElementById("breaktime").addEventListener("click",_pomo.breaktime);
    document.getElementById("longbreaktime").addEventListener("click",_pomo.longbreaktime);

}) ();