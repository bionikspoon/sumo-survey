/* eslint no-console:0 */
module.exports = function createAdmin(app) {
  console.log('Creating an Admin...');

  const { Admin } = app.models;

  return Admin.create({ username: 'admin', email: 'admin@example.com', password: 'secret' }).then(logResults);
};

function logResults(admin) {
  console.log('Created Admin: %s', admin.email);
  return admin;
}
