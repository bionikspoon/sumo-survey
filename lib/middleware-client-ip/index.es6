const loopback = require('loopback');

module.exports = () => (req, res, next) => {
  const context = loopback.getCurrentContext();
  const clientIps = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const clientIp = clientIps ? clientIps.split(', ', 1)[0] : null;

  if (context && clientIp) context.set('clientIp', clientIp);

  next();
};
