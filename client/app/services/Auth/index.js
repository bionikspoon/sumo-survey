import angular from 'angular';
import lbServices from 'client/lbServices';

export default angular
  .module('app.services.auth', [ lbServices ])
  .factory('Auth', Auth);

/** @ngInject **/
function Auth($log, $q, Admin, LoopBackAuth) {
  getCurrentUser.data = null;
  const service = { login, logout, isAuthenticated, streamCurrentUser, currentUser: {} };
  return service;

  ////////////////

  function login({ email, password, rememberMe }) {
    return Admin.login({ rememberMe }, { email, password }).$promise
      .finally(streamCurrentUser);
  }

  function logout() {
    return Admin.logout().$promise
      .finally(streamCurrentUser);
  }

  function streamCurrentUser() {
    return getCurrentUser()
      .then(currentUser => {
        angular.copy(currentUser, service.currentUser);
        return currentUser;
      })
      .catch(() => {
        angular.copy({}, service.currentUser);
        return {};
      });
  }

  function isAuthenticated() { return Admin.isAuthenticated(); }

  ////////////////

  function getCurrentUser() {
    if (!Admin.isAuthenticated()) return $q.reject(null);

    if (Admin.getCachedCurrent()) return $q.resolve(Admin.getCachedCurrent());

    if (getCurrentUser.data) { return getCurrentUser.data; }

    getCurrentUser.data = Admin.getCurrent().$promise
      .catch(err => {
        LoopBackAuth.clearUser();
        LoopBackAuth.clearStorage();
        return $q.reject(err);
      })
      .finally(() => { getCurrentUser.data = null; });

    return getCurrentUser.data;
  }
}
