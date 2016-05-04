/* eslint-env angular/mocks, jasmine */
import CoreController from './core.controller';
const { beforeEach } = global;

describe('Core Controller', () => {
  let $ctrl;
  let $scope;

  beforeEach(window.module(CoreController)); // eslint-disable-line angular/window-service

  beforeEach(() => {
    let $controller;
    let $rootScope;

    inject((_$controller_, _$rootScope_) => {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      $ctrl = $controller('CoreController', { $scope });
    });
  });

  it('Should exist', () => {
    expect(typeof $ctrl).toBe('object');
  });

  it('Should have name CoreController', () => {
    expect($ctrl.name).toBe('CoreController');
  });
});
