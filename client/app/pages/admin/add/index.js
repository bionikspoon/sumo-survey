import angular from 'angular';

const { NG_MODULES } = global;
const MODULE_NAME = 'app.page.admin.add';

export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ ...NG_MODULES() ]) // eslint-disable-line new-cap
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
