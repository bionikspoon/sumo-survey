import angular from 'angular';
import srcLoopbackServices from 'client/loopbackServices';

export default angular
  .module('app.page.survey', [ srcLoopbackServices ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('survey', {
      url: '/survey/',
      templateUrl: require('./survey.html'),
      controller: SurveyController,
      controllerAs: '$ctrl',
    });
}

function SurveyController(Question) {
  const $ctrl = this;

  $ctrl.question = Question.findOne({ 'filter[include]': 'choices' });
}

