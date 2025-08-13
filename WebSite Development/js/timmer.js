let time = 0;       // stores total seconds
        let flag = 1;       // 1 = running, 0 = paused
        let timerID;        // stores setInterval reference

        function updateDisplay() {
            document.querySelector(".minutes").innerText = Math.floor(time / 60);
            document.querySelector(".seconds").innerText = time % 60;
        }

        function startTimer() {
            timerID = setInterval(() => {
                time++;
                updateDisplay();
            }, 1000);
        }

        function toggleTimer() {
            if (flag === 1) {  
                // currently running → pause
                clearInterval(timerID);
                flag = 0;
                document.querySelector("button").innerText = "Resume";
            } else {           
                // currently paused → resume
                startTimer();
                flag = 1;
                document.querySelector("button").innerText = "Pause";
            }
        }

        // Start immediately
        startTimer();