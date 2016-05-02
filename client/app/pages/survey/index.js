import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SurveyServices from 'services/Survey';
import navHome from 'components/navHome';

export default angular
  .module('app.pages.survey', [ uiRouter, SurveyServices.name, navHome.name ])
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
  if (angular.isUndefined(question.text)) return $state.transitionTo('done');

  const $ctrl = this;
  $ctrl.question = question;

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

