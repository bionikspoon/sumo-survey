import angular from 'angular';
import clientLoopbackServices from 'client/loopbackServices';

export default angular
  .module('app.page.admin', [ clientLoopbackServices ])
  .config(routeConfig);

/** @ngInject **/
function routeConfig($stateProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin/',
      templateUrl: require('./admin.html'),
      controller: AdminController,
      controllerAs: '$ctrl',
      authenticate: true,
    });
}

/** @ngInject **/
function AdminController($log, $q, Question) {
  const $ctrl = this;

  $ctrl.routes = [
    { name: 'admin', title: 'Admin' },
  ];

  $ctrl.addChoice = (choice, question) => {
    if (!question.choices) question.choices = []; // eslint-disable-line no-param-reassign
    if (!choice) return;
    if (question.choices.includes(choice)) return;

    question.choices.push(angular.copy(choice));
    question.addChoice.text = ''; // eslint-disable-line no-param-reassign
  };

  $ctrl.addQuestion = question => {
    if (question.$invalid || question.addChoice.text.length || !question.choices.length) return;
    const { text, choices } = question;
    console.log('choices', choices);

    Question.create({ text, choices })
      .$promise
      .then(results => {
        question.text = ''; // eslint-disable-line no-param-reassign
        question.choices = []; // eslint-disable-line no-param-reassign
        question.$setPristine();
        question.$setUntouched();
        return results;
      })
      .catch(error => {
        $log.error('AdminController error: %s\n', error.data.error.message, error);
        return $q.reject(error);
      });
  };
}
