import angular from 'angular';
import Well from 'components/well';
import ShowErrors from 'components/showErrors';
import NavHome from 'components/navHome';
import AuthService from 'services/Auth';

export default angular
  .module('app.pages.login', [ Well.name, ShowErrors.name, AuthService.name, NavHome.name ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login/?next',
      templateUrl: require('./login.html'),
      controller: LoginController,
      controllerAs: '$ctrl',
      authenticate: false,
    });
}

/** @ngInject **/
function LoginController($state, $stateParams, Auth) {
  const $ctrl = this;
  const next = $stateParams.next || 'admin';

  $ctrl.login = form => {
    if (form.$invalid) return;
    Auth.login(form)
      .then(result => {
        $state.go(next);
        return result;
      });
  };
}
