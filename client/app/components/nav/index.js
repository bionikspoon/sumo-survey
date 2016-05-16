import angular from 'angular';

const { blocks } = global;
const MODULE_NAME = 'app.component.nav';

export default MODULE_NAME;

angular.module(MODULE_NAME, [ ...blocks(), ...modules() ]);

/**
 * Import top level modules
 * @returns {[string]} List of imports
 */
function modules() {
  const context = require.context('./', true, /\.\/[^\/]+\/index\.js$/);
  return context.keys().map(context);
}
