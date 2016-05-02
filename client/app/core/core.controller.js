/** @ngInject **/
export default function CoreController(Auth, Fingerprint) {
  // const app = this;

  // app.currentUser = Auth.currentUser;
  Auth.streamCurrentUser();

  // app.fingerprint = Fingerprint.fingerprint;
  Fingerprint.stream();

  // app.isAuthenticated = () => Auth.isAuthenticated();

  // app.login = () =>
  //   Auth
  //     .login({ email: 'admin@example.com', password: 'secret' })
  //     .catch($log.error);
  //
  // app.logout = () =>
  //   Auth
  //     .logout()
  //     .catch($log.error);
}
