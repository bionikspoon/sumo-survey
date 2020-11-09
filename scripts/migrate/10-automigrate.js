module.exports = function automigrate(app) {
  const { sql } = app.datasources;
  console.log('Preparing "sql" datasources with automigrate');

  return new Promise((resolve, reject) => sql.automigrate((error, data) => (error ? reject(error) : resolve(data))));
};
