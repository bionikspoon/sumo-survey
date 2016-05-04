import angular from 'angular';
import lbServices from 'client/lbServices';
import ngResource from 'angular-resource';

export default angular
  .module('app.services.loopback', [ ngResource, lbServices ]);
