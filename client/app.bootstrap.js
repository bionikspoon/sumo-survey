import angular from 'angular';
import app from './app';

angular.element(document).ready(() => {
  angular.bootstrap(document, [ app.name ], { strictDi: __PRODUCTION__ });
});

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line angular/window-service
    window.location.reload();
  });
}
