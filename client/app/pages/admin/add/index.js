import angular from 'angular';
import addController from './add.controller';

export default angular
  .module('app.pages.admin.add', [ addController.name ])
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
