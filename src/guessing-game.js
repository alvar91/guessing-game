class GuessingGame {
  #min = 0;
  #max = 0;
  #mid = 0;

  setRange(min, max) {
    this.#min = min;
    this.#max = max;
  }

  guess() {
    return (this.#mid = Math.ceil((this.#max + this.#min) / 2));
  }

  lower() {
    this.#max = this.#mid;
  }

  greater() {
    this.#min = this.#mid;
  }
}

module.exports = GuessingGame;
