/* eslint-env angular/mocks, jasmine */
import AddController from './add.controller';
const { beforeEach } = global;

describe('Add Controller', () => {
  let $ctrl;
  let $scope;

  beforeEach(window.module(AddController)); // eslint-disable-line angular/window-service

  beforeEach(() => {
    let $controller;
    let $rootScope;

    inject((_$controller_, _$rootScope_) => {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      $ctrl = $controller('AddController', { $scope });
    });
  });

  it('Should exist', () => {
    expect(typeof $ctrl).toBe('object');
  });

  it('Should have name AddController', () => {
    expect($ctrl.name).toBe('AddController');
  });
});
