import angular from 'angular';
import uiRouter from 'angular-ui-router';
import SurveyServices from 'services/Survey';
import componentsNav from 'components/nav';

const MODULE_NAME = 'app.page.survey';
export default MODULE_NAME;

angular.module(MODULE_NAME, [uiRouter, SurveyServices, componentsNav]).config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider.state('survey', {
    url: '/survey/',
    templateUrl: require('./survey.html'),
    controller: SurveyController,
    controllerAs: '$ctrl',
    resolve: {
      question: /** @ngInject **/ (Survey) => Survey.question(),
    },
  });
}

function SurveyController($log, $state, $q, Survey, question) {
  if (angular.isUndefined(question.text)) return $state.transitionTo('done');

  const $ctrl = this;
  $ctrl.question = question;

  // //////////////

  $ctrl.setResponse = (response) => {
    if (response.$invalid) return;
    response.questionId = $ctrl.question.id;

    Survey.answer(response)
      .then((data) => {
        $state.reload();
        return data;
      })
      .catch((error) => {
        $log.error('SurveyController error: %s\n', error.data.error.message, error);
        return $q.reject(error);
      });
  };
}
