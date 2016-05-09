module.exports = function disconnect(app) {
  const { sql } = app.datasources;
  console.log('Disconnecting from "sql" datasource');

  return new Promise((resolve, reject) =>
    sql.disconnect((error, data) => (error ? reject(error) : resolve(data)))
  );
};
