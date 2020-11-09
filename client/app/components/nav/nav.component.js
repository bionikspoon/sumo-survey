import angular from 'angular';

const MODULE_NAME = 'app.component.nav.component';
export default MODULE_NAME;

angular.module(MODULE_NAME, []).component('appNav', {
  templateUrl: require('./nav.html'),
  transclude: true,
});
