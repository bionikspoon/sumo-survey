import angular from 'angular';

const MODULE_NAME = 'app.component.nav.add.component';
export default MODULE_NAME;

angular.module(MODULE_NAME, []).component('appNavAdd', {
  templateUrl: require('./add.html'),
});
