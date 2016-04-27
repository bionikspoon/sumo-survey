import angular from 'angular';

export default angular
  .module('app.page.admin', [])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('admin', { url: '/admin/', templateUrl: require('./admin.html') });
}
