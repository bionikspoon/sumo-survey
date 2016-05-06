const MODULE_NAME = 'app.pages';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, modules());

/**
 * Import top level pages
 * @returns {[string]} List of page imports
 */
function modules() {
  const context = require.context('./', true, /\.\/[^\/]+\/index\.js$/);
  return context.keys().map(module => context(module).default);
}
