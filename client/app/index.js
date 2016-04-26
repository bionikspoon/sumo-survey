import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngTouch from 'angular-touch';
import ngResource from 'angular-resource';
import uiRouter from 'angular-ui-router';

import appCore from 'core';
import appPages from 'pages';
import lbServices from 'loopbackServices';

export default angular
  .module('app', [
    ngAnimate, ngTouch, ngResource, uiRouter, lbServices, appCore.name, appPages.name,
  ]);
