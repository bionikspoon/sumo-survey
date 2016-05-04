import angular from 'angular';
import bootstrapCollapse from 'angular-ui-bootstrap/src/collapse';

const MODULE_NAME = 'app.component.navbar';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ bootstrapCollapse ])
  .component('appNavbar', {
    templateUrl: require('./navbar.html'),
    bindings: { routes: '<', brand: '@', brandLink: '@' },
  });
