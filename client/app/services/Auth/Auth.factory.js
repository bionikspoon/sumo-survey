import angular from 'angular';
import LoopbackService from 'services/Loopback';

const MODULE_NAME = 'app.service.auth.factory';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ LoopbackService ])
  .factory('Auth', Auth);

/** @ngInject **/
function Auth($q, Admin, LoopBackAuth) {
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
      .then(currentUser => angular.copy(currentUser, service.currentUser))
      .catch(() => {
        LoopBackAuth.clearUser();
        LoopBackAuth.clearStorage();
        return angular.copy({}, service.currentUser);
      });
  }

  function isAuthenticated() { return Admin.isAuthenticated(); }

  ////////////////

  function getCurrentUser() {
    // Guard, not authenticated
    if (!Admin.isAuthenticated()) return $q.reject(null);

    // Guard, used cached data
    if (Admin.getCachedCurrent()) return $q.resolve(Admin.getCachedCurrent());

    // Guard, prevent digest spamming, return W.I.P. promise
    if (getCurrentUser.data) { return getCurrentUser.data; }

    // new request required ...
    getCurrentUser.data = Admin.getCurrent().$promise;  // save W.I.P.

    return getCurrentUser.data
      .finally(() => { getCurrentUser.data = null; });  // clear W.I.P.
  }
}
