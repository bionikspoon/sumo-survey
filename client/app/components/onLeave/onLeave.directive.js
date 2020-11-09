/* eslint default-case:0 */
import angular from 'angular';
import angularAnimate from 'angular-animate';

// onLeave
const MODULE_NAME = 'app.component.onLeave.directive';
export default MODULE_NAME;

angular.module(MODULE_NAME, [angularAnimate]).directive('appOnLeave', OnLeaveDirective);

/** @ngInject **/
function OnLeaveDirective($animate) {
  const directive = {
    bindToController: true,
    controller: angular.noop,
    controllerAs: '$ctrl',
    restrict: 'A',
    scope: {
      onLeave: '&appOnLeave',
    },
    link,
  };
  return directive;

  function link({ $ctrl }, element) {
    const container = element.parent();

    $animate.on('enter', element, handleEnter({ container }));
    $animate.on('leave', element, handleLeave({ $ctrl }));
  }
}

function handleEnter({ container }) {
  return (element, phase) => {
    switch (phase) {
      case 'start':
        container.addClass('no-scroll');
        break;
      case 'close':
        container.removeClass('no-scroll');
        break;
    }
  };
}

function handleLeave({ $ctrl }) {
  return (element, phase) => {
    switch (phase) {
      case 'start':
        break;
      case 'close':
        $ctrl.onLeave();
        break;
    }
  };
}
