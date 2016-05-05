import angular from 'angular';

const MODULE_NAME = 'app.core';
export default MODULE_NAME;

const { blocks } = global;

angular
  .module(MODULE_NAME, [ ...blocks([ 'component', 'config', 'run' ]) ]) // eslint-disable-line
  .value('$routerRootComponent', 'appCore');
