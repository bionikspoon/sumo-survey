import angular from 'angular';
import AuthService from 'services/Auth';

const MODULE_NAME = 'app.navAdmin.component';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ AuthService ])
  .component('appNavAdmin', {
    templateUrl: require('./navAdmin.html'),
    controller: NavAdminController,
  });

/** @ngInject **/
function NavAdminController(Auth) {
  const $ctrl = this;

  $ctrl.isAuthenticated = () => Auth.isAuthenticated();

  $ctrl.logout = () => Auth.logout();
}
