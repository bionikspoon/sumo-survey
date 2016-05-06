/* eslint-env angular/mocks, jasmine */
import SurveyFactory from './Survey.factory';
const { beforeEach, describe } = global;

describe('Survey Factory', () => {
  let Survey;

  beforeEach(window.module(SurveyFactory)); // eslint-disable-line angular/window-service
  beforeEach(inject((_Survey_) => {
    Survey = _Survey_;
  }));

  it('Should have method question', () => {
    expect(typeof Survey.question).toBe('function');
  });

  it('Should have method answer', () => {
    expect(typeof Survey.answer).toBe('function');
  });
});
