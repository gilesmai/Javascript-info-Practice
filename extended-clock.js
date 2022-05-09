import { Clock } from './clock.js';

class ExtendedClock extends Clock {
  constructor({ template, precision }) {
    super({ template });
    this._precision = precision;
  }
  start = () => {
    this.render();
    this._timer = setInterval(this.render, this._precision);
  };
}

let lowResolutionClock = new ExtendedClock({
  template: 'h:m:s',
  precision: 10000,
});

lowResolutionClock.start();
