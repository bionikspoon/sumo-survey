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
        question: /** @ngInject **/Question => Question.findOne({ 'filter[include]': 'choices' }).$promise,
      },
    });
}

function SurveyController($log, Guest, Question, question, fingerprint) {
  const $ctrl = this;
  $ctrl.question = question;
  $log.debug('SurveyController fingerprint:', fingerprint);
  // $ctrl.unanswered = Guest.getAllUnanswered({ fingerprint });

  $ctrl.update = () => {
    $ctrl.unanswered = Guest.getAllUnanswered({ fingerprint });
  };

  $ctrl.setResponse = response => {
    if (response.$invalid) return;
    response.questionId = question.id;
    $log.debug('SurveyController response:', response);

    Guest
      .createResponse({ fingerprint }, response)
      .$promise
      .then(data => {
        $log.debug('SurveyController data:', data);
        return data;
      })
      .catch(error => {
        $log.error('SurveyController error: %s\n', error.data.error.message, error);
      });
  };
}

