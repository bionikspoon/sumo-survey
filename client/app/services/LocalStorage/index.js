import angular from 'angular';
import angularLocalStorage from 'angular-local-storage';

export default angular
  .module('app.LocalStorage', [ angularLocalStorage ])
  .config(localStorageConfig)
  .factory('LocalStorage', LocalStorage);

/** @ngInject **/
function LocalStorage(localStorageService) {
  return localStorageService;
}

/** @ngInject **/
function localStorageConfig(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('app')
    .setNotify(false, false);
}
