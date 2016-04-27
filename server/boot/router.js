module.exports = function (app, cb) {
  const router = app.loopback.Router();
  app.use(router);
  process.nextTick(cb); // Remove if you pass `cb` to an async function yourself
};
