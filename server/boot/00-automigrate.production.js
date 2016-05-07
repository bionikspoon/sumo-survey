module.exports = function automigrate(app, callback) {
  const sql = app.datasources.sql;

  sql.autoupdate(_callback);
  
  function _callback(err) {
    if (err) throw err;
    
    sql.disconnect();
    return callback();
  }
};
