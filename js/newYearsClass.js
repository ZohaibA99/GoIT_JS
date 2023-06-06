class newYearCountDown {
    isTimerRun;
    currentDate;
    stopBtnEL;
    startBtnEL;
    parEl;
    timerId;

    NEWYEARSDATE;


    constructor() {
        this.currentDate = null;
        this.stopBtnEL = document.querySelector("#stopBtn");
        this.startBtnEL = document.querySelector("#contuineBtn");
        this.parEl = document.getElementById("time");
        this.timerId = null;
        this.isTimerRun = true;
        this.NEWYEARSDATE = new Date(`Jan 1, ${new Date().getFullYear() + 1}`);
        this.intilazie();
    }

    intilazie(){
        this.countDownToNY();
        this.timerId = setInterval(() => this.countDownToNY(), 1000);

        this.stopBtnEL.addEventListener('click', () => {
            this.stopInterval();
            if(!this.isTimerRun){
                this.startBtnEL.disabled = false;
                this.startBtnEL.addEventListener('click', continueCountdown)
            }
        });
    }

    countDownToNY(){
        this.currentDate = Date.now();
        const diff = this.NEWYEARSDATE - this.currentDate;
    
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 24);
        const seconds = Math.floor((diff / 1000) % 60);
    
        this.parEl.textContent = ` ${days} d. ${hours} h. ${minutes} m. ${seconds} s.`;  
        
        if (diff <= 0){
            this.stopInterval();
            this.parEl.textContent = "Happy New Year!!!!!!!";
        }
    }

    stopInterval() {
        this.isTimerRun = false;
        clearInterval(this.timerId);
        alert("The Countdown has been stopped");
    }

    continueCountdown(){
        this.isTimerRun = true;
        this.startBtnEL.disabled = true;
        alert("Continue countdown");
        this.timerId = setInterval(countDownToNY, 1000);
    }
}

const timer = new newYearCountDown();