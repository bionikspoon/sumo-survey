/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import WellDirective from './well.directive';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('well Directive', () => {
  let element;
  let $scope;

  beforeEach(ngModule(WellDirective));

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
      expect(element[ 0 ]).to.have.class('ng-scope');
    });

    it('Should exist with class ng-isolate-scope', () => {
      expect(element[ 0 ]).to.have.class('ng-isolate-scope');
    });
  });

  describe('Controller', () => {
    let $ctrl;

    beforeEach(() => {
      $ctrl = element.controller('appWell');
    });

    it('Should exist', () => {
      expect($ctrl).to.be.an('object');
    });
  });
});
