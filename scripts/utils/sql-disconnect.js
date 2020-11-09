/* eslint no-console:0 */
module.exports = function sqlDisconnect(app) {
  const { sql } = app.datasources;
  console.log('Disconnecting from "sql" datasource');

  return new Promise((resolve, reject) => sql.disconnect((error, data) => (error ? reject(error) : resolve(data))));
};
