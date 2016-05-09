/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
const { expect } = require('chai');
import ShowErrorsDirective from './showErrors.directive';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('showErrors Directive', () => {
  let element;
  let $scope;

  beforeEach(ngModule(ShowErrorsDirective));

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
      expect(element.children()[ 0 ].classList.contains('ng-scope')).to.be.falsy;
    });

    it('Should exist with class ng-isolate-scope', () => {
      expect(element.children()[ 0 ]).to.have.class('ng-isolate-scope');
    });
  });

  describe('Controller', () => {
    let $ctrl;

    beforeEach(() => {
      $ctrl = element.children().controller('appShowErrors');
    });

    it('Should exist', () => {
      expect($ctrl).to.be.an('object');
    });
  });
});
