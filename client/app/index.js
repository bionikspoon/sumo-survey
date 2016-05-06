import angular from 'angular';
import appCore from './core';
import appPages from './pages';

const MODULE_NAME = 'app';
export default MODULE_NAME;

angular.module(MODULE_NAME, [ appCore, appPages ]);
