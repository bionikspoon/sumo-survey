import angular from 'angular';

const MODULE_NAME = 'app.components.well';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [])
  .directive('appWell', WellDirective);

/** @ngInject **/
function WellDirective() {
  const directive = {
    bindToController: true,
    controller: WellController,
    controllerAs: '$ctrl',
    restrict: 'A',
    scope: {},
    transclude: true,
    templateUrl: require('./well.html'),
  };
  return directive;
}

/** @ngInject **/
function WellController() {
  // const $ctrl = this;
}
