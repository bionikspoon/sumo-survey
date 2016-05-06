/* eslint-env angular/mocks, jasmine */
import FingerprintFactory from './Fingerprint.factory';
const { beforeEach, describe } = global;

describe('Fingerprint Factory', () => {
  let Fingerprint;

  beforeEach(window.module(FingerprintFactory)); // eslint-disable-line angular/window-service
  beforeEach(inject((_Fingerprint_) => {
    Fingerprint = _Fingerprint_;
  }));

  it('Should have method stream', () => {
    expect(typeof Fingerprint.stream).toBe('function');
  });
});
