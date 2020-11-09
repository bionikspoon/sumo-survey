import angular from 'angular';
import coreController from './core.controller';
import onLeave from 'components/onLeave';

const MODULE_NAME = 'app.core.component';
export default MODULE_NAME;

angular.module(MODULE_NAME, [coreController, onLeave]).component('appCore', {
  templateUrl: require('./core.html'),
  controller: 'CoreController',
  controllerAs: 'app',
});
