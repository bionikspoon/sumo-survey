/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import CoreController from './core.controller';
import { spy } from 'sinon';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('Core Controller', () => {
  let $ctrl;
  let $scope;

  beforeEach(ngModule(CoreController));
  beforeEach(ngModule($provide => {
    $provide.service('Auth', MockAuth);
    $provide.service('Fingerprint', MockFingerprint);
    function MockAuth() {
      this.streamCurrentUser = spy();
    }

    function MockFingerprint() {
      this.stream = spy();
    }
  }));

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

  it('Should have called Auth.streamCurrentUser', inject(Auth => {
    expect(Auth.streamCurrentUser).to.have.been.calledOnce;
  }));

  it('Should have called Fingerprint.stream', inject(Fingerprint => {
    expect(Fingerprint.stream).to.have.been.calledOnce;
  }));
});
