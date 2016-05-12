/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import CoreComponent from './core.component';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('Core Component', () => {
  let element;
  let $scope;

  beforeEach(ngModule(CoreComponent));

  beforeEach(() => {
    let $compile;
    let $rootScope;

    inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      element = $compile('<app-core></app-core>')($scope);
      $scope.$digest();
    });
  });

  describe('Component', () => {
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
      $ctrl = element.controller('appCore');
    });

    it('Should exist', () => {
      expect($ctrl).to.be.an('object');
    });
  });
});
