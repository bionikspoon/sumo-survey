/* eslint-env angular/mocks, jasmine */
import StatsFactory from './Stats.factory';
const { beforeEach, describe } = global;

describe('Stats Factory', () => {
  let Stats;

  beforeEach(window.module(StatsFactory)); // eslint-disable-line angular/window-service
  beforeEach(inject((_Stats_) => {
    Stats = _Stats_;
  }));

  it('Should have method summary', () => {
    expect(typeof Stats.summary).toBe('function');
  });

  it('Should have method question', () => {
    expect(typeof Stats.question).toBe('function');
  });
});
