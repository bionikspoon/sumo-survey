import angular from 'angular';
import coreComponent from './core.component';
import coreConfig from './core.config';
import coreRun from './core.run';

const MODULE_NAME = 'app.core';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ coreConfig, coreRun, coreComponent ])
  .value('$routerRootComponent', 'appCore');
