import angular from 'angular';
import uiRouter from 'angular-ui-router';
import StatsService from 'services/Stats';
import uiBootstrapAccordion from 'angular-ui-bootstrap/src/accordion';

export default angular
  .module('app.pages.admin.results', [ uiRouter, uiBootstrapAccordion, StatsService.name ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('admin.results', {
      url: 'results/',
      templateUrl: require('./results.html'),
      controller: ResultsController,
      controllerAs: '$ctrl',
    });
}

/** @ngInject **/
function ResultsController($log, Stats) {
  const $ctrl = this;
  $ctrl.name = 'ResultsController';

  activate();

  ////////////////

  function activate() {
    $ctrl.questions = Stats.summary()
      .then(questions => {
        $ctrl.questions = questions;
        return questions;
      });
  }
}
