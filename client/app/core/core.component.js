import angular from 'angular';
import coreController from './core.controller';

export default angular
  .module('app.core.component', [ coreController.name ])
  .component('appCore', {
    templateUrl: require('./core.html'),
    controller: 'CoreController',
    controllerAs: 'app',
  });

