import angular from 'angular';
import AuthService from 'services/Auth';

export default angular
  .module('app.components.navAdmin', [ AuthService.name ])
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
