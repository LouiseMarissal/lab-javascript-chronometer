class Chronometer {
  constructor() {
    this.currentTime = 0;
  }

  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);
  }

  getMinutes() {
    var minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }
  getSeconds() {
    var seconds = this.currentTime % 60;
    return seconds;
  }
  twoDigitsNumber(a) {
    if (a < 10) {
      return `0${String(a)}`;
    } else return String(a);
  }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  // splitClick() {}
}
