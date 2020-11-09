import angular from 'angular';
import uiRouter from 'angular-ui-router';
import componentsNav from 'components/nav';

// import top level pages
const context = require.context('./', true, /\.\/[^\/]+\/index\.js$/);
const pages = context
  .keys()
  .map(context)
  .map((esModule) => esModule.default);

const MODULE_NAME = 'app.page.admin';
export default MODULE_NAME;

angular.module(MODULE_NAME, [uiRouter, componentsNav, ...pages]).config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/admin/', '/admin/add/');
  $stateProvider.state('admin', {
    url: '/admin/',
    templateUrl: require('./admin.html'),
    controller: AdminController,
    controllerAs: '$ctrl',
    authenticate: true,
    abstract: true,
  });
}

/** @ngInject **/
function AdminController() {
  const $ctrl = this;

  activate();

  // //////////////

  function activate() {
    $ctrl.routes = [
      { name: 'admin.add', title: 'Add Question' },
      { name: 'admin.stats', title: 'Stats' },
    ];
  }
}
