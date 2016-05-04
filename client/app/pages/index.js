// import top level pages
const context = require.context('./', true, /\.\/[^\/]+\/index\.js$/);
const modules = context.keys().map(module => context(module).default);

const MODULE_NAME = 'app.pages';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ ...modules ]);
