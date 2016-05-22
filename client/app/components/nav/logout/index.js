import angular from 'angular';

const { NG_MODULES } = global;
const MODULE_NAME = 'app.component.nav.logout';

export default MODULE_NAME;

angular.module(MODULE_NAME, [ ...NG_MODULES() ]); // eslint-disable-line new-cap
