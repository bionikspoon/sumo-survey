import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngTouch from 'angular-touch';
import uiRouter from 'angular-ui-router';
import appCore from './core';
import appPages from './pages';

const MODULE_NAME = 'app';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [
    ngAnimate, ngTouch, uiRouter, appCore, appPages,
  ]);
