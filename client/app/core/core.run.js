import angular from 'angular';
import AuthService from 'services/Auth';
import NavigationService from 'services/Navigation';
import uiRouter from 'angular-ui-router';

const MODULE_NAME = 'app.core.run';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ uiRouter, AuthService, NavigationService ])
  .run(guardRoutes);

/** @ngInject **/
function guardRoutes($rootScope, $state, Auth) {
  const unregister = $rootScope.$on('$stateChangeStart', handleStateChange);
  $rootScope.$on('$destroy', unregister);

  function handleStateChange(event, toState, toParams) {
    if (angular.isUndefined(toState.authenticate)) return;
    if (toState.authenticate === Auth.isAuthenticated()) return;

    event.preventDefault();
    $state.transitionTo('login', { next: toState.name, toParams });
  }
}
