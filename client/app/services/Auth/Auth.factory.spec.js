/* eslint-env angular/mocks, jasmine */
import AuthFactory from './Auth.factory';
const { beforeEach, describe } = global;

describe('Auth Factory', () => {
  let Auth;

  beforeEach(window.module(AuthFactory)); // eslint-disable-line angular/window-service
  beforeEach(inject((_Auth_) => {
    Auth = _Auth_;
  }));

  it('Should have method login', () => {
    expect(typeof Auth.login).toBe('function');
  });

  it('Should have method logout', () => {
    expect(typeof Auth.logout).toBe('function');
  });

  it('Should have method isAuthenticated', () => {
    expect(typeof Auth.isAuthenticated).toBe('function');
  });

  it('Should have method streamCurrentUser', () => {
    expect(typeof Auth.streamCurrentUser).toBe('function');
  });
});
