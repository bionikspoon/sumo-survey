/** @ngInject **/
export default function coreConfig($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(__PRODUCTION__);
}
