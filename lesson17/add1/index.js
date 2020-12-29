const timer = {
   secondsPassed: 0,
   minsPassed: 0,

   // startTimer() {
   //    function handler() {
   //       setInterval(function () {
   //          this.secondsPassed++;
   //       });
   //    }

   //    const handlerWithContext = handler.bind(this);

   //    setInterval(handlerWithContext, 1000);

   //    // window.handler();
   // },

   // option2

   startTimer() {
      const handler = () => {
         this.secondsPassed += 1;
         if (this.secondsPassed === 60) {
            this.secondsPassed = 0;
            this.minsPassed += 1;
         }
      };

      this.startTimer.timerId = setInterval(handler, 1000);
   },
   stopTimer() {
      // input - num -timerID
      //  output -undefined
      clearInterval(this.startTimer.timerId);
   },
   getTime() {
      return `${this.minsPassed}:${
         this.secondsPassed < 10 ? '0' + this.secondsPassed : this.secondsPassed
      }`;
   },
   resetTimer() {
      this.secondsPassed = 0;
      this.minsPassed = 0;
   },
};
