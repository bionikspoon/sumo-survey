module.exports = function automigrate(app, callback) {
  // process.env.STARTED = 'FALSE';
  const sql = app.datasources.sql;
  const method = process.env.STARTED === 'TRUE' ? 'autoupdate' : 'automigrate';

  sql[ method ](_callback);

  function _callback(err) {
    if (err) throw err;
    
    sql.disconnect();
    return callback();
  }
};
