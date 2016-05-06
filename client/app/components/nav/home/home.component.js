import angular from 'angular';

const MODULE_NAME = 'app.component.nav.home.component';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [])
  .component('appNavHome', {
    templateUrl: require('./home.html'),
  });

