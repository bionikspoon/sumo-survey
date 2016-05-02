import angular from 'angular';
import uiRouter from 'angular-ui-router';

export default angular
  .module('app.pages.admin.results', [ uiRouter ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('admin.results', {
      url: 'results/',
      templateUrl: require('./results.html'),
      controller: ResultsController,
      controllerAs: '$ctrl',
    });
}

/** @ngInject **/
function ResultsController() {}
