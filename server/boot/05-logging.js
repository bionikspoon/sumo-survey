var loopback = require('loopback');
module.exports = function (app) {
  app.use(loopback.logger('dev'))
};
