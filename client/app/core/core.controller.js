import angular from 'angular';
import AuthService from 'services/Auth';
import FingerprintService from 'services/Fingerprint';

const MODULE_NAME = 'app.core.controller';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ AuthService, FingerprintService ])
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
