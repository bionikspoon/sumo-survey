module.exports = function (app, cb) {

  const Admin = app.models.Admin;

  Admin
    .create({ email: 'admin@example.com', password: 'secret' })
    .then(data => cb(null, data))
    .catch(cb);
};
