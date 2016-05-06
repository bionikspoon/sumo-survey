import angular from 'angular';
import uiRouter from 'angular-ui-router';
import StatsService from 'services/Stats';
import barchart from 'components/barchart';

const MODULE_NAME = 'app.admin.stats.question.page';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ uiRouter, barchart, StatsService ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('admin.stats.question', {
      url: ':id/',
      templateUrl: require('./question.html'),
      controller: QuestionController,
      controllerAs: '$ctrl',
      authenticate: true,
      resolve: {
        question: /** @ngInject **/(Stats, $stateParams) => Stats.question($stateParams.id),
      },
    });
}

/** @ngInject **/
function QuestionController($log, question) {
  const $ctrl = this;

  $ctrl.question = question;
  activate();

  ////////////////

  function activate() {
  }
}
