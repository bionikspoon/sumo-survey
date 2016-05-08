module.exports = function automigrate(app, callback) {
  if (process.env.NODE_ENV !== 'production') return callback();

  const sql = app.datasources.sql;
  const method = global.STARTED === true ? 'autoupdate' : 'automigrate';
  console.log('Preparing "sql" datasource with %s', method);

  sql[ method ](callback);
};
