/* eslint-env angular/mocks, jasmine */
import WellDirective from './';
const { beforeEach } = global;

describe('Well Directive', () => {
  let element;
  let $scope;

  beforeEach(window.module(WellDirective.name)); // eslint-disable-line angular/window-service

  beforeEach(() => {
    let $compile;
    let $rootScope;

    inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      element = $compile('<main app-well></main>')($scope);
      $scope.$digest();
    });
  });

  describe('Directive', () => {
    it('Should exist with class ng-scope', () => {
      expect(element[ 0 ].classList.contains('ng-scope')).toBeTruthy();
    });

    it('Should exist with class ng-isolate-scope', () => {
      expect(element[ 0 ].classList.contains('ng-isolate-scope')).toBeTruthy();
    });
  });

  describe('Controller', () => {
    let $ctrl;

    beforeEach(() => {
      $ctrl = element.controller('appWell');
    });

    it('Should exist', () => {
      expect(typeof $ctrl).toBe('object');
    });
  });
});
