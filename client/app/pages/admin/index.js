import angular from 'angular';
import pageAdminAdd from './add';
import navbar from 'components/navbar';

export default angular
  .module('app.pages.admin', [ pageAdminAdd.name, navbar.name ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/admin/', '/admin/add/');
  $stateProvider
    .state('admin', {
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

  ////////////////

  function activate() {
    $ctrl.routes = [
      { name: 'admin', title: 'Admin' },
    ];
  }
}
