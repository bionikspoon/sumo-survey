/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import NavigationFactory from './Navigation.factory';
import { expect } from 'chai';
const { beforeEach, describe, it, ngModule, inject } = global;

const setLeft = { left: true, right: false };
const setRight = { left: false, right: true };
describe('Navigation Factory', () => {
  let Navigation;

  beforeEach(ngModule(NavigationFactory));
  beforeEach(inject((_Navigation_) => {
    Navigation = _Navigation_;
  }));

  describe('API', () => {
    it('Should have method setLeft', () => {
      expect(Navigation.setLeft).to.be.a('function');
    });
    it('Should have method setRight', () => {
      expect(Navigation.setRight).to.be.a('function');
    });
    it('Should have object direction', () => {
      expect(Navigation.direction).to.be.an('object');
    });
  });

  describe('Setting', () => {
    it('Should initially be set left', () => {
      expect(Navigation.direction).to.eql(setLeft);
    });

    it('Should update direction when setRight', () => {
      Navigation.setRight();
      expect(Navigation.direction).to.eql(setRight);
    });

    it('Should update direction when setLeft', () => {
      Navigation.setRight();
      Navigation.setLeft();
      expect(Navigation.direction).to.eql(setLeft);
    });
  });
});
