module.exports = function (app) {
  const restApiRoot = app.get('restApiRoot');
  app.use(restApiRoot, app.loopback.rest());
};
