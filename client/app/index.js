import angular from 'angular';
import appCore from './core';
import appPages from './pages';
import ngAnimate from 'angular-animate';

const MODULE_NAME = 'app.app';
export default MODULE_NAME;

angular.module(MODULE_NAME, [ngAnimate, appCore, appPages]);
