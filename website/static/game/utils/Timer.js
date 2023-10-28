export class Timer {
    constructor() {
        this.segundos = 0;
        this.timerId = null;
    }

    startTimer() {
        if (this.timerId === null) {  
            this.timerId = setInterval(() => {
                this.segundos++;
                const timer = add([
                    text("tempo: " + this.segundos, {
                        size: 50,
                        font: "Round",

                    }),
                    fixed(),
                    pos(150, 10),
                ])
                setTimeout(() => {
                    destroy(timer)
                },700)
            }, 1000);
        }
    }

    async checkAndStartTimer() {
        if (this.timerId === null) {  
            var response = await fetch('/get-game-data', {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
              });
            const responseData = await response.json();

            this.segundos = responseData['response']['timer'];

            this.startTimer(); 
        }
    }

    restartTimer() {
        this.segundos = 0;
        clearInterval(this.timerId);
        this.timerId = null;
        destroyAll("timer");
    }

    stopTimer() {
        clearInterval(this.timerId);
        this.timerId = null;
    }

}
