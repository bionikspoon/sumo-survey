module.exports = function (app, callback) {
  if (process.env.STARTED === 'TRUE') return callback();

  console.log('Creating an Admin...');

  const Admin = app.models.Admin;

  Admin
    .create({ email: 'admin@example.com', password: 'secret' })
    .then(admin => _callback(null, admin))
    .catch(_callback);

  function _callback(error, admin) {
    if (error) console.error('create-admin error', error);

    console.log('Created Admin: %s', admin.email);

    if (callback) callback(error, admin);
    return error ? Promise.reject(error) : Promise.resolve(admin);
  }
};
