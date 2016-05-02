import angular from 'angular';
import uiRouter from 'angular-ui-router';
import lbServices from 'client/loopbackServices';

import Auth from 'services/Auth';
import Fingerprint from 'services/Fingerprint';

import navbar from 'components/navbar';
import coreConfig from './core.config';
import CoreController from './core.controller';
import coreRun from './core.run';

export default angular
  .module('app.core', [ uiRouter, lbServices, Auth.name, Fingerprint.name, navbar.name ])
  .value('$routerRootComponent', 'appCore')
  .run(coreRun)
  .config(coreConfig)
  .controller('CoreController', CoreController)
  .component('appCore', {
    templateUrl: require('./core.html'),
    controller: 'CoreController',
    controllerAs: 'app',
  });

