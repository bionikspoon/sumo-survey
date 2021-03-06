/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import BarchartDirective from './barchart.directive';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('barchart Directive', () => {
  let element;
  let $scope;

  beforeEach(ngModule(BarchartDirective));

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
      expect(element[ 0 ]).to.have.class('ng-scope');
    });

    it('Should exist with class ng-isolate-scope', () => {
      expect(element[ 0 ]).to.have.class('ng-isolate-scope');
    });
  });
});
