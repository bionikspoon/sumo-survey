import angular from 'angular';
import uiRouter from 'angular-ui-router';
import componentsNav from 'components/nav';
import NavigationService from 'services/Navigation';

const MODULE_NAME = 'app.page.home';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ uiRouter, componentsNav, NavigationService ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: require('./home.html'),
      resolve: {
        direction: /** @ngInject **/Navigation => Navigation.setRight(),
      },
    });
}
