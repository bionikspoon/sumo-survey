import angular from 'angular';
import coreController from './core.controller';

const MODULE_NAME = 'app.core.component';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ coreController ])
  .component('appCore', {
    templateUrl: require('./core.html'),
    controller: 'CoreController',
    controllerAs: 'app',
  });

