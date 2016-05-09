/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
const { expect } = require('chai');
import AddController from './add.controller';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('Add Controller', () => {
  let $ctrl;
  let $scope;

  beforeEach(ngModule(AddController));

  beforeEach(() => {
    let $controller;
    let $rootScope;

    inject((_$controller_, _$rootScope_) => {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      $ctrl = $controller('AddController', { $scope });
    });
  });

  it('Should exist', () => {
    expect($ctrl).to.be.an('object');
  });

  it('Should have name AddController', () => {
    expect($ctrl.name).to.be.equal('AddController');
  });
});
