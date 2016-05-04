import angular from 'angular';
import AuthService from 'services/Auth';
import FingerprintService from 'services/Fingerprint';

export default angular
  .module('app.core.controller', [ AuthService.name, FingerprintService.name ])
  .controller('CoreController', CoreController);

/** @ngInject **/
function CoreController(Auth, Fingerprint) {
  const $ctrl = this;
  $ctrl.name = 'CoreController';

  activate();

  ////////////////

  function activate() {
    Auth.streamCurrentUser();
    Fingerprint.stream();
  }
}
