module.exports = function (app, cb) {
  const sql = app.datasources.sql;
  const method = process.env.STARTED === 'TRUE' ? 'autoupdate' : 'automigrate';

  sql[ method ](cb);
};
