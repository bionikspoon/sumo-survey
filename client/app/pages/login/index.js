import angular from 'angular';

export default angular
  .module('app.page.login', [])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('login', { url: '/login/', templateUrl: require('./login.html') });
}

