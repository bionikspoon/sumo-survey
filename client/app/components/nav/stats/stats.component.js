import angular from 'angular';

const MODULE_NAME = 'app.component.nav.stats.component';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [])
  .component('appNavStats', {
    templateUrl: require('./stats.html'),
  });

