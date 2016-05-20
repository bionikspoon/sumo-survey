const loopback = require('loopback');

module.exports = () => (req, res, next) => {
  const context = loopback.getCurrentContext();
  const clientIp = req.headers[ 'x-forwarded-for' ] || req.connection.remoteAddress;

  if (context && clientIp) context.set('clientIp', clientIp);

  next();
};
