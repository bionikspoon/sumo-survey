/* eslint-env angular/mocks, jasmine */
import BarchartDirective from './barchart.directive';
const { beforeEach, describe } = global;

describe('barchart Directive', () => {
  let element;
  let $scope;

  beforeEach(window.module(BarchartDirective)); // eslint-disable-line angular/window-service

  beforeEach(() => {
    let $compile;
    let $rootScope;

    inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      element = $compile('<app-barchart></app-barchart>')($scope);
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
});
