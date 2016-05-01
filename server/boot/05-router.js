module.exports = function useRouter(app) {
  const router = app.loopback.Router(); // eslint-disable-line new-cap
  app.use(router);
};
