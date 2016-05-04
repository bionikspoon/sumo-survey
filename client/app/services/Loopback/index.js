import angular from 'angular';
import lbServices from 'client/lbServices';
import ngResource from 'angular-resource';

const MODULE_NAME = 'app.loopback.factory';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ ngResource, lbServices ]);
