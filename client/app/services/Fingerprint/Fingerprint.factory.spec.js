/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
const { expect } = require('chai');
import FingerprintFactory from './Fingerprint.factory';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('Fingerprint Factory', () => {
  let Fingerprint;

  beforeEach(ngModule(FingerprintFactory));
  beforeEach(inject((_Fingerprint_) => {
    Fingerprint = _Fingerprint_;
  }));

  it('Should have method stream', () => {
    expect(Fingerprint.stream).to.be.a('function');
  });
});
