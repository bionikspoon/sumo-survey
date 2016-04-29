import angular from 'angular';
import wellFocus from 'components/wellFocus';
import showErrors from 'components/showErrors';
import servicesAuth from 'services/Auth';

export default angular
  .module('app.page.login', [ wellFocus.name, showErrors.name, servicesAuth.name ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login/',
      templateUrl: require('./login.html'),
      controller: LoginController,
      controllerAs: '$ctrl',
    });
}

/** @ngInject **/
function LoginController($state, Auth) {
  const $ctrl = this;

  $ctrl.login = form => {
    if (form.$invalid) return;
    Auth.login(form)
      .then(result => {
        $state.go('admin');
        return result;
      });
  };
}
