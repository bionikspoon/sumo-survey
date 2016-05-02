import angular from 'angular';
import NavAdmin from 'components/navAdmin';

export default angular
  .module('app.pages.home', [ NavAdmin.name ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: require('./home.html'),
      controller: HomeController,
      controllerAs: '$ctrl',
    });
}

function HomeController(Auth) {
  const $ctrl = this;

  $ctrl.logout = () => Auth.logout();
}

