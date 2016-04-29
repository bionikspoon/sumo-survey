/* eslint-env angular/mocks, jasmine */

import 'angular-mocks';
import appHero from './';

describe('Hero Controller', () => {
  let $ctrl;
  let $scope;

  beforeEach(() => {
    let $controller;
    let $rootScope;

    // eslint-disable-next-line angular/window-service
    window.module(appHero.name);

    inject((_$controller_, _$rootScope_) => {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      $ctrl = $controller('HeroController', { $scope });
    });
  });

  it('Should exist', () => {
    expect(typeof $ctrl).toBe('object');
  });

  it('name is initialized to world', () => {
    expect($ctrl.name).toBe('world');
  });
});
