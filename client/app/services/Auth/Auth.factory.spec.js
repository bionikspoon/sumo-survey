/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
const { expect } = require('chai');
import AuthFactory from './Auth.factory';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('Auth Factory', () => {
  let Auth;

  beforeEach(ngModule(AuthFactory));
  beforeEach(inject((_Auth_) => {
    Auth = _Auth_;
  }));

  it('Should have method login', () => {
    expect(Auth.login).to.be.a('function');
  });

  it('Should have method logout', () => {
    expect(Auth.logout).to.be.a('function');
  });

  it('Should have method isAuthenticated', () => {
    expect(Auth.isAuthenticated).to.be.a('function');
  });

  it('Should have method streamCurrentUser', () => {
    expect(Auth.streamCurrentUser).to.be.a('function');
  });
});
