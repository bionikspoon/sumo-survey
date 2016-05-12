/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import CoreController from './core.controller';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('Core Controller', () => {
  let $ctrl;
  let $scope;

  beforeEach(ngModule(CoreController));

  beforeEach(() => {
    let $controller;
    let $rootScope;

    inject((_$controller_, _$rootScope_) => {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      $ctrl = $controller('CoreController', { $scope });
    });
  });

  it('Should exist', () => {
    expect($ctrl).to.be.an('object');
  });

  it('Should have name CoreController', () => {
    expect($ctrl.name).to.be.equal('CoreController');
  });
});
