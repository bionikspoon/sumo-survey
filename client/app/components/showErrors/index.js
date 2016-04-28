import angular from 'angular';

// ShowErrors
export default angular
  .module('app.component.ShowErrors', [])
  .directive('appShowErrors', ShowErrorsDirective);

/** @ngInject **/
function ShowErrorsDirective($timeout) {
  const directive = {
    bindToController: true,
    require: '^form',
    restrict: 'A',
    controller: angular.noop,
    controllerAs: '$ctrl',
    scope: {},
    link,
  };
  return directive;

  function link(scope, element) {
    const inputEl = angular.element(element[ 0 ].querySelector('[id]'));

    inputEl.bind('blur', () => {
      $timeout(() => element.toggleClass('has-error', hasError(inputEl[ 0 ])), 1);
    });
  }
}

function hasError(element) {
  return element.classList.contains('ng-invalid') && element.classList.contains('ng-dirty');
}
