import angular from 'angular';

const MODULE_NAME = 'app.component.showErrors.directive';
export default MODULE_NAME;

angular.module(MODULE_NAME, []).directive('appShowErrors', ShowErrorsDirective);

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
    const inputEl = angular.element(element[0].querySelector('[id]'));

    inputEl.bind('blur', () => {
      $timeout(() => element.toggleClass('has-error', hasError(inputEl[0])), 25);
    });
  }
}

function hasError(element) {
  return element.classList.contains('ng-invalid') && element.classList.contains('ng-dirty');
}
