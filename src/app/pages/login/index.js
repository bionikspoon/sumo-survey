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
