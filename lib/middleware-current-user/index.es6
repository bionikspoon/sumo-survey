const loopback = require('loopback');
const Promise = require('bluebird');

module.exports = () => (req, res, next) => {
  const { app, accessToken } = req;
  const { Admin } = app.models;

  if (!accessToken) return next();

  return Admin.findById(accessToken.userId)
    .then((currentUser) => {
      const ctx = loopback.getCurrentContext();
      if (!currentUser) return Promise.reject(new Error('No user with this access token was found.'));
      if (ctx) ctx.set('currentUser', currentUser);
      return currentUser;
    })
    .then(() => next())
    .catch(next);
};
