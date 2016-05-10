import angular from 'angular';

const MODULE_NAME = 'app.core.config';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [])
  .config(coreConfig);

/** @ngInject **/
function coreConfig($urlRouterProvider, $locationProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common[ 'X-Requested-With' ];
}
