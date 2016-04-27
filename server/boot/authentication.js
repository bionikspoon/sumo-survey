module.exports = function (app, cb) {
  app.enableAuth();
  process.nextTick(cb);
};
