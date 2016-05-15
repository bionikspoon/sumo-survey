import angular from 'angular';

const MODULE_NAME = 'app.service.Navigation.factory';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [])
  .factory('Navigation', Navigation);

/** @ngInject **/
function Navigation($q) {
  const service = {
    setLeft, setRight, direction: { left: true, right: false },
  };
  return service;

  ////////////////

  function setLeft() {
    return set({ left: true, right: false });
  }

  function setRight() {
    return set({ left: false, right: true });
  }

  ////////////////

  function set({ left, right }) {
    return $q.resolve(angular.copy({ left, right }, service.direction));
  }
}
