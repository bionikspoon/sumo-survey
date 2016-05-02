import angular from 'angular';
import srcLoopbackServices from 'client/loopbackServices';
import servicesFingerprint from 'services/Fingerprint';

export default angular
  .module('app.page.survey', [ srcLoopbackServices, servicesFingerprint.name ])
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
        fingerprint: /** @ngInject **/Fingerprint => Fingerprint.stream(),
      },
    });
}

function SurveyController($log, $state, Guest, Question, fingerprint) {
  const $ctrl = this;
  $ctrl.question = Guest.getOneUnanswered({ fingerprint });
  $ctrl.question.$promise
    .then(data => {
      $log.debug('SurveyController data:', data);
      return data;
    })
    .catch(error => {
      $log.error('SurveyController error:', error);
    });

  $ctrl.showForm = () => !angular.equals({}, $ctrl.question);

  $ctrl.setResponse = response => {
    if (response.$invalid) return;
    response.questionId = $ctrl.question.id;

    Guest
      .createResponse({ fingerprint }, response)
      .$promise
      .then(data => {
        $log.debug('SurveyController data:', data);
        $state.reload();
        return data;
      })
      .catch(error => {
        $log.error('SurveyController error: %s\n', error.data.error.message, error);
      });
  };
}

