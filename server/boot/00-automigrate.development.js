module.exports = function automigrate(app, callback) {
  if (process.env.NODE_ENV !== 'development') return callback();

  // process.env.STARTED = 'FALSE';
  const sql = app.datasources.sql;
  const method = process.env.STARTED === 'TRUE' ? 'autoupdate' : 'automigrate';

  console.log('Preparing "sql" datasource with %s', method);

  sql[ method ](callback);

};
