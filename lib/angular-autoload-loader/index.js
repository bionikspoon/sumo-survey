const RE = /(^(?:const|var|let)\s+\{?\s*NG_MODULES\s*\}?\s*=\s*global(?:\.NG_MODULES)?\s*;?\s*(?:\/\/.*)?$)/m;
const BLOCKS = `
function NG_MODULES(includes = []) {
  const context = require.context('./', true, /.*\.(?:component|config|controller|directive|factory|run|service)$/);
  const requiredContext = includes.length
    ? context.keys().filter(notIncluded, false)
    : context.keys();

  return requiredContext.map(context);

  function notIncluded(path) {
    return includes.reduce((required, include) => required || path.endsWith(include), false);
  }
}
`;

module.exports = function angularAutoload(source) {
  this.cacheable();
  return source.replace(RE, BLOCKS);
};

