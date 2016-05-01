const loopback = require('loopback');

module.exports = function (app) {
  app.use(loopback.context());
  app.use(loopback.token());
  app.use((req, res, next) => {
    const loopbackContext = loopback.getCurrentContext();
    const clientIp = req.headers[ 'x-forwarded-for' ] || req.connection.remoteAddress;

    if (loopbackContext && clientIp) loopbackContext.set('clientIp', clientIp);
    next();
  });
};
