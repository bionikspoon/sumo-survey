/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import NavLogoutController from './logout.controller';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('NavLogout Controller', () => {
  let $ctrl;
  let $scope;

  beforeEach(ngModule(NavLogoutController));

  beforeEach(() => {
    let $controller;
    let $rootScope;

    inject((_$controller_, _$rootScope_) => {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      $ctrl = $controller('NavLogoutController', { $scope });
    });
  });

  it('Should exist', () => {
    expect($ctrl).to.be.an('object');
  });

  it('Should have isAuthenticated method', () => {
    expect($ctrl.isAuthenticated).to.be.a('function');
  });

  it('Should have logout method', () => {
    expect($ctrl.logout).to.be.a('function');
  });
});
