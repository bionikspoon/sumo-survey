import angular from 'angular';

const MODULE_NAME = 'app.core';
export default MODULE_NAME;

const { NG_MODULES } = global;

angular
  .module(MODULE_NAME, [ ...NG_MODULES([ 'component', 'config', 'run' ]) ]) // eslint-disable-line new-cap
  .value('$routerRootComponent', 'appCore');
