/* eslint no-console:0 */
const promisify = require('../../utils/promisify');

module.exports = function createAdmin(app, callback) {
  if (process.env.STARTED === 'TRUE') return callback();

  console.log('Creating an Admin...');

  const Admin = app.models.Admin;

  return Admin
    .create({ username: 'admin', email: 'admin@example.com', password: 'secret' })
    .then(logResults)
    .then(promisify(callback, true))
    .catch(promisify(callback));
};

function logResults(admin) {
  console.log('Created Admin: %s', admin.email);
  return admin;
}
