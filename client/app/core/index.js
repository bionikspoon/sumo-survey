import angular from 'angular';
import uiRouter from 'angular-ui-router';
import coreComponent from './core.component';
import coreConfig from './core.config';
import coreRun from './core.run';

export default angular
  .module('app.core', [ uiRouter, coreConfig.name, coreRun.name, coreComponent.name ])
  .value('$routerRootComponent', 'appCore');
