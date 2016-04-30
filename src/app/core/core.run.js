/** @ngInject **/
export default function coreRun($rootScope, $state, Auth) {
  const unregister = $rootScope.$on('$stateChangeStart', guardRoute);
  $rootScope.$on('$destroy', () => unregister());

  function guardRoute(event, toState, toParams, fromState, fromParams) {
    if (angular.isUndefined(toState.authenticate)) return;
    if (toState.authenticate === Auth.isAuthenticated()) return;

    event.preventDefault();
    $state.transitionTo('login', { next: toState.name });
  }
}
