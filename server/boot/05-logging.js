const loopback = require('loopback');

module.exports = function useLogging(app) {
  app.use(loopback.logger('dev'));
};
