/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import StatsFactory from './Stats.factory';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('Stats Factory', () => {
  let Stats;

  beforeEach(ngModule(StatsFactory));
  beforeEach(inject((_Stats_) => {
    Stats = _Stats_;
  }));

  it('Should have method summary', () => {
    expect(Stats.summary).to.be.a('function');
  });

  it('Should have method question', () => {
    expect(Stats.question).to.be.a('function');
  });
});
