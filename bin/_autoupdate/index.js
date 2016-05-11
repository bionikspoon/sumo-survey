/* eslint no-console:0 */
const path = require('path');
const _app = require(path.resolve(__dirname, '../../'));

const autoupdate = require('./10-autoupdate');
const disconnect = require('../_common/90-disconnect');

module.exports = function migrate(app = _app) {
  return autoupdate(app)
    .then(() => disconnect(app))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });
};
