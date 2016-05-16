/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import OnLeaveDirective from './onLeave.directive';
import { expect } from 'chai';
import { spy } from 'sinon';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('onLeave Directive', () => {
  let element;
  let container;
  let $scope;

  beforeEach(ngModule(OnLeaveDirective));
  beforeEach(() => {
    let $compile;
    let $rootScope;

    inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);
      $scope.onLeave = spy();

      container = $compile('<div><div app-on-leave="$scope.onLeave()"></div></div>')($scope);
      element = container.children();
      $scope.$digest();
    });
  });

  describe('Directive', () => {
    it('Should exist with class ng-scope', () => {
      expect(container[ 0 ]).to.have.class('ng-scope');
    });

    it('Should exist with class ng-isolate-scope', () => {
      expect(element[ 0 ]).to.have.class('ng-isolate-scope');
    });
  });

  describe('Controller', () => {
    let $ctrl;

    beforeEach(() => {
      $ctrl = element.controller('appOnLeave');
    });

    it('Should exist', () => {
      expect($ctrl).to.be.an('object');
    });
  });
});
