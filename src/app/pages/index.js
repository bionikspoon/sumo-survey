// import top level pages
const context = require.context('./', true, /\.\/[^\/]+\/index\.js$/);
const modules = context.keys().map(module => context(module).default);

export default angular
  .module('app.pages', [ ...modules.map(module => module.name) ]);
