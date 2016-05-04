import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SurveyServices from 'services/Survey';
import navHome from 'components/navHome';

const MODULE_NAME = 'app.page.survey';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ uiRouter, SurveyServices, navHome ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('survey', {
      url: '/survey/',
      templateUrl: require('./survey.html'),
      controller: SurveyController,
      controllerAs: '$ctrl',
      resolve: {
        question: /** @ngInject **/Survey => Survey.question(),
      },
    });
}

function SurveyController($log, $state, Survey, question) {
  const $ctrl = this;
  $ctrl.question = question;

  activate();

  ////////////////

  function activate() {
    if (angular.isUndefined($ctrl.question.text)) $state.transitionTo('done');
  }

  ////////////////

  $ctrl.setResponse = response => {
    if (response.$invalid) return;
    response.questionId = $ctrl.question.id;

    Survey
      .answer(response)
      .then(data => {
        $state.reload();
        return data;
      })
      .catch(error => {
        $log.error('SurveyController error: %s\n', error.data.error.message, error);
      });
  };
}

