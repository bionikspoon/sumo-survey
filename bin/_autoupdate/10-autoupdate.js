/* eslint no-console:0 */

module.exports = function autoupdate(app) {
  const { sql } = app.datasources;
  console.log('Preparing "sql" datasource with autoupdate');

  return new Promise((resolve, reject) =>
    sql.autoupdate((error, data) => (error ? reject(error) : resolve(data)))
  );
};
