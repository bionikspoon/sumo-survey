const RE = /(^(?:const|var|let)\s+\{?\s*blocks\s*\}?\s*=\s*global(?:\.blocks)?\s*;?\s*(?:\/\/.*)?$)/m;
const BLOCKS = `
function blocks(includes = []) {
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
  const result = source.replace(RE, BLOCKS);
  return result;
};

