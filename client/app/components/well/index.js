import angular from 'angular';

// well
export default angular
  .module('app.component.well', [])
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
