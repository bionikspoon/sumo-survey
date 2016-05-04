import angular from 'angular';

const MODULE_NAME = 'app.components.navHome';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [])
  .component('appNavHome', {
    templateUrl: require('./navHome.html'),
  });
