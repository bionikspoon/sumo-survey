import angular from 'angular';

export default angular
  .module('app.core.config', [])
  .config(coreConfig);

/** @ngInject **/
function coreConfig($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(__PRODUCTION__);
}
