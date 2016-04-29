import angular from 'angular';

export default angular
  .module('app.page.home', [])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: require('./home.html') });
}

