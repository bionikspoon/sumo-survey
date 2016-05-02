import angular from 'angular';
import well from 'components/well';
import showErrors from 'components/showErrors';
import navHome from 'components/navHome';
import servicesAuth from 'services/Auth';

export default angular
  .module('app.page.login', [ well.name, showErrors.name, servicesAuth.name, navHome.name ])
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
