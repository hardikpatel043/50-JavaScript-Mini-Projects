class PyramidCalculator {
  MIN = 25;
  MAX = 110;
  PYRAMIDCALC = {
    0: [10, 17, 13, 24],
    1: [22, 7, 21, 9],
    2: [29, -2, 32, -3],
    3: [40, -12, 42, -11],
    4: [47, -16, 51, -19],
    5: [54, -22, 56, -27],
    6: [60, -28, 63, -30],
  };
  constructor(entry) {
    this.entry = entry;
    this.sl = 0;
    this.pyramid = [];
  }

  computeSL() {
    const entryNumber = parseInt(this.entry);
    if (entryNumber < 71) {
      this.sl = entryNumber - 24;
    } else {
      this.sl = entryNumber - 41;
    }
  }

  computePyramid() {
    const entryNumber = parseInt(this.entry);

    for (let item in this.PYRAMIDCALC) {
      if (entryNumber < 71) {
        this.pyramid[item] = [
          entryNumber + this.PYRAMIDCALC[item][0],
          entryNumber - this.PYRAMIDCALC[item][1],
        ];
      } else {
        this.pyramid[item] = [
          entryNumber + this.PYRAMIDCALC[item][2],
          entryNumber - this.PYRAMIDCALC[item][3],
        ];
      }
    }
  }

  isOutOfRange() {
    const entryNumber = parseInt(this.entry);
    return entryNumber < this.MIN || entryNumber > this.MAX;
  }

  updateDisplay() {
    slTextElement.innerText = this.sl;

    for (let item in this.PYRAMIDCALC) {
      const pyramidValueElement = pyramidItem[item].querySelector(
        '[data-pyramid-value]'
      );

      const pyramidSLElement = pyramidItem[item].querySelector(
        '[data-pyramid-sl]'
      );
      pyramidValueElement.innerText = this.pyramid[item][0];
      pyramidSLElement.innerText = this.pyramid[item][1];
    }
  }
}

const entryTextElement = document.querySelector('[data-entry]');
const goButton = document.querySelector('[data-go]');
const slTextElement = document.querySelector('[data-sl]');
const pyramidItem = document.querySelectorAll('[data-pyramid-item]');

goButton.addEventListener('click', handleClick);

function handleClick() {
  const calc = new PyramidCalculator(entryTextElement.value);
  if (calc.isOutOfRange()) return;

  calc.computeSL();
  calc.computePyramid();
  calc.updateDisplay();
}
