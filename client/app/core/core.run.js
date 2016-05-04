import angular from 'angular';
import AuthService from 'services/Auth';
import uiRouter from 'angular-ui-router';

const MODULE_NAME = 'app.core.run';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ uiRouter, AuthService ])
  .run(coreRun);

/** @ngInject **/
function coreRun($rootScope, $state, Auth) {
  const unregister = $rootScope.$on('$stateChangeStart', guardRoute);
  $rootScope.$on('$destroy', () => unregister());

  function guardRoute(event, toState, toParams) {
    if (angular.isUndefined(toState.authenticate)) return;
    if (toState.authenticate === Auth.isAuthenticated()) return;

    event.preventDefault();
    $state.transitionTo('login', { next: toState.name, toParams });
  }
}
