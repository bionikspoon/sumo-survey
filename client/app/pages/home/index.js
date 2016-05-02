import angular from 'angular';
import navAdmin from 'components/navAdmin';

export default angular
  .module('app.page.home', [ navAdmin.name ])
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

