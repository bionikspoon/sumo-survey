import angular from 'angular';

export default angular.module('app.component.wellFocus', [])
  .component('appWellFocus', {
    templateUrl: require('./wellFocus.html'),
    transclude: true,
  });
