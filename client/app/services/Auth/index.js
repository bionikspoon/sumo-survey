import angular from 'angular';
import LoopbackService from 'services/Loopback';
import uiRouter from 'angular-ui-router';

const MODULE_NAME = 'app.services.auth';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ LoopbackService, uiRouter ])
  .factory('Auth', Auth);

/** @ngInject **/
function Auth($log, $state, $q, Admin, LoopBackAuth) {
  getCurrentUser.data = null;
  const service = { login, logout, isAuthenticated, streamCurrentUser, currentUser: {} };
  return service;

  ////////////////

  function login({ email, password, rememberMe }) {
    return Admin.login({ rememberMe }, { email, password })
      .$promise
      .finally(streamCurrentUser);
  }

  function logout() {
    return Admin.logout()
      .$promise
      .finally(streamCurrentUser);
  }

  function streamCurrentUser() {
    return getCurrentUser()
      .then(currentUser => {
        angular.copy(currentUser, service.currentUser);
        return service.currentUser;
      })
      .catch(() => {
        angular.copy({}, service.currentUser);
        return service.currentUser;
      });
  }

  function isAuthenticated() { return Admin.isAuthenticated(); }

  ////////////////

  function getCurrentUser() {
    if (!Admin.isAuthenticated()) return $q.reject(null);

    if (Admin.getCachedCurrent()) return $q.resolve(Admin.getCachedCurrent());

    if (getCurrentUser.data) { return getCurrentUser.data; }

    getCurrentUser.data = Admin.getCurrent()
      .$promise
      .catch(err => {
        LoopBackAuth.clearUser();
        LoopBackAuth.clearStorage();
        $state.reload();
        return $q.reject(err);
      })
      .finally(() => { getCurrentUser.data = null; });

    return getCurrentUser.data;
  }
}
