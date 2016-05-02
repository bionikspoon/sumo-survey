import angular from 'angular';
import SurveyServices from 'services/Survey';
import NavAdmin from 'components/navAdmin';

export default angular
  .module('app.page.done', [ SurveyServices.name, NavAdmin.name ])
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
  if (angular.isDefined(question.text)) return $state.go('survey');
}

