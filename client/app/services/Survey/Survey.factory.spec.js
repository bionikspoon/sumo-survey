/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
const { expect } = require('chai');
import SurveyFactory from './Survey.factory';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('Survey Factory', () => {
  let Survey;

  beforeEach(ngModule(SurveyFactory));
  beforeEach(inject((_Survey_) => {
    Survey = _Survey_;
  }));

  it('Should have method question', () => {
    expect(Survey.question).to.be.a('function');
  });

  it('Should have method answer', () => {
    expect(Survey.answer).to.be.a('function');
  });
});
