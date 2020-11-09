import angular from 'angular';

const { NG_MODULES } = global;
const MODULE_NAME = 'app.page.admin.add';

export default MODULE_NAME;

const allModules = NG_MODULES().map((esModule) => esModule.default); // eslint-disable-line new-cap

angular
  .module(MODULE_NAME, allModules) // eslint-disable-line new-cap
  .config(routeConfig);
/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider.state('admin.add', {
    url: 'add/',
    templateUrl: require('./add.html'),
    controller: 'AddController',
    controllerAs: '$ctrl',
    authenticate: true,
  });
}
