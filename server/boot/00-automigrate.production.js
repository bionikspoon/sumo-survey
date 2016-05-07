module.exports = function automigrate(app, cb) {
  const sql = app.datasources.sql;

  sql.autoupdate(cb);
};
