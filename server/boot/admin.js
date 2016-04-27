module.exports = function (app, cb) {

  const Admin = app.models.Admin;

  app.datasources.sql.automigrate(() => {
    Admin.create({ email: 'admin@example.com', password: 'secret' }, cb)

  });

};
