/* eslint-env angular/mocks, jasmine */
import ShowErrorsDirective from './';
const { beforeEach } = global;

describe('showErrors Directive', () => {
  let element;
  let $scope;

  beforeEach(window.module(ShowErrorsDirective.name)); // eslint-disable-line angular/window-service

  beforeEach(() => {
    let $compile;
    let $rootScope;

    inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      element = $compile('<form><div app-show-errors></div></form>')($scope);
      $scope.$digest();
    });
  });

  describe('Directive', () => {
    it('Should exist without class ng-scope', () => {
      expect(element.children()[ 0 ].classList.contains('ng-scope')).toBeFalsy();
    });

    it('Should exist with class ng-isolate-scope', () => {
      expect(element.children()[ 0 ].classList.contains('ng-isolate-scope')).toBeTruthy();
    });
  });

  describe('Controller', () => {
    let $ctrl;

    beforeEach(() => {
      $ctrl = element.children().controller('appShowErrors');
    });

    it('Should exist', () => {
      expect(typeof $ctrl).toBe('object');
    });
  });
});
