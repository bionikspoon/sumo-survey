import angular from 'angular';

const { NG_MODULES } = global;
const MODULE_NAME = 'app.component.nav';

export default MODULE_NAME;

const allModules = [...NG_MODULES(), ...modules()].map((ngModule) => ngModule.default); // eslint-disable-line new-cap

angular.module(MODULE_NAME, allModules); // eslint-disable-line new-cap

/**
 * Import top level modules
 * @returns {[string]} List of imports
 */
function modules() {
  const context = require.context('./', true, /\.\/[^\/]+\/index\.js$/);
  return context.keys().map(context);
}
