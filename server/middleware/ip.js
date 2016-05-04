const loopback = require('loopback');

module.exports = function ipContextFactory() {
  return function ipContext(req, res, next) {
    const context = loopback.getCurrentContext();
    const clientIp = req.headers[ 'x-forwarded-for' ] || req.connection.remoteAddress;

    if (context && clientIp) context.set('clientIp', clientIp);

    next();
  };
};
