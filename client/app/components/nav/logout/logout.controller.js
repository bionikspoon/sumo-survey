import angular from 'angular';
import servicesAuth from 'services/Auth';

const MODULE_NAME = 'app.component.nav.logout.controller';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ servicesAuth ])
  .controller('NavLogoutController', NavLogoutController);

/** @ngInject **/
function NavLogoutController($state, Auth) {
  const $ctrl = this;
  $ctrl.isAuthenticated = () => Auth.isAuthenticated();
  $ctrl.logout = () => Auth.logout()
    .then(data => {
      $state.go('home');
      return data;
    });
}
