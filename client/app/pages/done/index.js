import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SurveyServices from 'services/Survey';
import componentsNav from 'components/nav';

const MODULE_NAME = 'app.page.done';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ uiRouter, SurveyServices, componentsNav ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('done', {
      url: '/done/',
      templateUrl: require('./done.html'),
      controller: DoneController,
      controllerAs: '$ctrl',
      resolve: {
        question: /** @ngInject **/Survey => Survey.question(),
      },
    });
}

/** @ngInject **/
function DoneController($state, question) {
  activate();

  ////////////////

  function activate() {
    if (angular.isDefined(question.text)) $state.go('survey');
  }
}

