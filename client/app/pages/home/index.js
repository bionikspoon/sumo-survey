import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navAdmin from 'components/navAdmin';

const MODULE_NAME = 'app.page.home';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ uiRouter, navAdmin ])
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

/** @ngInject **/
function HomeController() {
}

