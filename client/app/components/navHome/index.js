import angular from 'angular';

export default angular
  .module('app.components.navHome', [])
  .component('appNavHome', {
    templateUrl: require('./navHome.html'),
  });
