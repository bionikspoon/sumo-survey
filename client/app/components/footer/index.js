import angular from 'angular';

export default angular
  .module('app.component.footer', [])
  .component('appFooter', {
    templateUrl: require('./footer.html'),
    controller: FooterController,
    bindings: { app: '<', copyright: '@' },
  });

/** @ngInject **/
function FooterController() {
  const $ctrl = this;
  $ctrl.now = Date.now();
}
