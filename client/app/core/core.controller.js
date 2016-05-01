/** @ngInject **/
export default function CoreController($log, $rootScope, Auth, Fingerprint) {
  const app = this;

  app.routes = [
    { name: 'home', title: 'Home' },
    { name: 'login', title: 'Login' },
    { name: 'admin', title: 'Admin' },
  ];

  app.noun = 'turtles';

  app.currentUser = Auth.currentUser;
  Auth.streamCurrentUser();

  app.fingerprint = Fingerprint.fingerprint;
  Fingerprint.stream();

  app.isAuthenticated = () => Auth.isAuthenticated();

  app.login = () =>
    Auth
      .login({ email: 'admin@example.com', password: 'secret' })
      .catch($log.error);

  app.logout = () =>
    Auth
      .logout()
      .catch($log.error);
}
