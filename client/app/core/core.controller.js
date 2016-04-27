/* @ngInject */
export default function CoreController($log, $rootScope, Auth) {
  const app = this;

  app.noun = 'turtles';

  app.currentUser = Auth.currentUser;
  Auth.streamCurrentUser();

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
