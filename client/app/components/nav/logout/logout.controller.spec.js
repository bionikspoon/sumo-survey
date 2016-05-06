/* eslint-env angular/mocks, jasmine */
import NavLogoutController from './logout.controller';
const { beforeEach, describe } = global;

describe('NavLogout Controller', () => {
  let $ctrl;
  let $scope;

  beforeEach(window.module(NavLogoutController)); // eslint-disable-line angular/window-service

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
    expect(typeof $ctrl).toBe('object');
  });

  it('Should have isAuthenticated method', () => {
    expect(typeof $ctrl.isAuthenticated).toBe('function');
  });

  it('Should have logout method', () => {
    expect(typeof $ctrl.logout).toBe('function');
  });
});
