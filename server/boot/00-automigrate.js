module.exports = function (app, cb) {
  const sql = app.datasources.sql;

  sql.automigrate(cb);
};
