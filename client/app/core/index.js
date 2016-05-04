import angular from 'angular';
import coreComponent from './core.component';
import coreConfig from './core.config';
import coreRun from './core.run';

export default angular
  .module('app.core', [ coreConfig.name, coreRun.name, coreComponent.name ])
  .value('$routerRootComponent', 'appCore');
