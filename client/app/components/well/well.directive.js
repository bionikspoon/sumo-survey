import angular from 'angular';

const MODULE_NAME = 'app.well.directive';
export default MODULE_NAME;

angular.module(MODULE_NAME, []).directive('appWell', WellDirective);

/** @ngInject **/
function WellDirective() {
  const directive = {
    restrict: 'A',
    scope: {},
    transclude: true,
    templateUrl: require('./well.html'),
  };
  return directive;
}
