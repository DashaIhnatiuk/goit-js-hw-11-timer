class CountdownTimer{
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate.getTime();
        this.timeCalculation = this.timeCalculation.bind(this);
        this.start();
      }


      timeCalculation() {
        const day = document.querySelector('[data-value="days"]');
        const hour = document.querySelector("[data-value='hours']");
        const minute = document.querySelector("[data-value='mins']");
        const second = document.querySelector("[data-value='secs']");
        const timeNow = Date.now();
        this.time = this.targetDate - timeNow;
        day.textContent = Math.floor(this.time / (1000 * 60 * 60 * 24));
        hour.textContent = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minute.textContent = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
        second.textContent = Math.floor((this.time % (1000 * 60)) / 1000);
      }
    
      start() {
        const body = document.querySelector("body");
        setInterval(this.timeCalculation, 1000);
      }
};

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date('Jul 17, 2019')
});