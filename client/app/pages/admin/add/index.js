import angular from 'angular';
import lbServices from 'client/lbServices';

export default angular
  .module('app.pages.admin.add', [ lbServices ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('admin.add', {
      url: 'add/',
      templateUrl: require('./add.html'),
      controller: AdminAddController,
      controllerAs: '$ctrl',
      authenticate: true,
    });
}

/** @ngInject **/
function AdminAddController($log, $state, $q, Question) {
  const $ctrl = this;

  $ctrl.routes = [
    { name: 'admin', title: 'Admin' },
  ];

  $ctrl.addChoice = (choice, question) => {
    if (!question.choices) question.choices = [];
    if (!choice) return;
    if (question.choices.includes(choice)) return;

    question.choices.push(angular.copy(choice));
    question.addChoice.text = '';
  };

  $ctrl.addQuestion = question => {
    if (question.$invalid || question.addChoice.text.length || !question.choices.length) return;
    const { text, choices } = question;
    $log.debug('AdminController choices:', choices);

    Question.create({ text, choices })
      .$promise
      .then(results => {
        $state.reload();
        return results;
      })
      .catch(error => {
        $log.error('AdminAddController error: %s\n', error.data.error.message, error);
        return $q.reject(error);
      });
  };
}
