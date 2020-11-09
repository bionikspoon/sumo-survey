/* eslint no-console:0 */

const _app = require('../..');

const automigrate = require('./10-automigrate');
const createAdmin = require('./20-create-admin');
const createGuests = require('./30-create-guests');
const createQuestions = require('./40-create-questions');
const createResponses = require('./50-create-responses');
const sqlDisconnect = require('../utils/sql-disconnect');

module.exports = function migrate(app = _app) {
  return automigrate(app)
    .then(() => createAdmin(app))
    .then(() => createGuests(app))
    .then(() => createQuestions(app))
    .then(() => createResponses(app))
    .then(() => sqlDisconnect(app))
    .catch((error) => {
      console.trace(error);
      return Promise.reject(error);
    });
};
