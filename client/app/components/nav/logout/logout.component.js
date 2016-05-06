import angular from 'angular';
import navLogoutController from './logout.controller';

const MODULE_NAME = 'app.component.nav.logout.component';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ navLogoutController ])
  .component('appNavLogout', {
    templateUrl: require('./logout.html'),
    controller: 'NavLogoutController',
  });

