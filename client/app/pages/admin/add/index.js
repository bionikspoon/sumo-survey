import angular from 'angular';
import addController from './add.controller';

const MODULE_NAME = 'app.pages.admin.add';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ addController ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('admin.add', {
      url: 'add/',
      templateUrl: require('./add.html'),
      controller: 'AddController',
      controllerAs: '$ctrl',
      authenticate: true,
    });
}
