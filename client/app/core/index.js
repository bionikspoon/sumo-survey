import angular from 'angular';

const MODULE_NAME = 'app.core';
export default MODULE_NAME;

const { NG_MODULES } = global;

const allModules = NG_MODULES(['component', 'config', 'run']).map((ngModule) => ngModule.default); // eslint-disable-line new-cap

angular.module(MODULE_NAME, allModules).value('$routerRootComponent', 'appCore');
