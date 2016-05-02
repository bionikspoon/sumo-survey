import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lbServices from 'client/lbServices';
import AuthService from 'services/Auth';
import FingerprintService from 'services/Fingerprint';
import CoreController from './core.controller';
import coreConfig from './core.config';
import coreRun from './core.run';

export default angular
  .module('app.core', [ uiRouter, lbServices, AuthService.name, FingerprintService.name ])
  .value('$routerRootComponent', 'appCore')
  .run(coreRun)
  .config(coreConfig)
  .controller('CoreController', CoreController)
  .component('appCore', {
    templateUrl: require('./core.html'),
    controller: 'CoreController',
    controllerAs: 'app',
  });

