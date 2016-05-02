import angular from 'angular';
import AuthService from 'services/Auth';
import uiRouter from 'angular-ui-router';

export default angular
  .module('app.core.run', [ uiRouter, AuthService.name ])
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
