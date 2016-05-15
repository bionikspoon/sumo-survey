import angular from 'angular';
import AuthService from 'services/Auth';
import FingerprintService from 'services/Fingerprint';
import NavigationService from 'services/Navigation';

const MODULE_NAME = 'app.core.controller';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ AuthService, FingerprintService, NavigationService ])
  .controller('CoreController', CoreController);

/** @ngInject **/
function CoreController(Auth, Fingerprint, Navigation) {
  const app = this; // eslint-disable-line angular/controller-as-vm
  app.direction = Navigation.direction;
  app.setLeft = () => Navigation.setLeft();

  activate();

  ////////////////

  function activate() {
    Auth.streamCurrentUser();
    Fingerprint.stream();
  }
}
