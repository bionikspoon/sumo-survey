import angular from 'angular';
import SurveyServices from 'services/Survey';
import navAdmin from 'components/navAdmin';

export default angular
  .module('app.pages.done', [ SurveyServices.name, navAdmin.name ])
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

