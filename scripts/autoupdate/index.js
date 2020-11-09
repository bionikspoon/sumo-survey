/* eslint no-console:0 */

const _app = require('../..');

const sqlAutoupdate = require('./sql-autoupdate');
const sqlDisconnect = require('../utils/sql-disconnect');

module.exports = function migrate(app = _app) {
  return sqlAutoupdate(app)
    .then(() => sqlDisconnect(app))
    .catch((error) => {
      console.error(error);
      return Promise.reject(error);
    });
};
