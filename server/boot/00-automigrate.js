module.exports = function automigrate(app, cb) {
  // process.env.STARTED = 'FALSE';
  const sql = app.datasources.sql;
  const method = process.env.STARTED === 'TRUE' ? 'autoupdate' : 'automigrate';

  sql[ method ](cb);
};
