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
    });
}

/** @ngInject **/
function AdminController($q, Question) {
  const $ctrl = this;

  $ctrl.routes = [
    { name: 'admin', title: 'Admin' },
  ];

  $ctrl.addChoice = (choice, question) => {
    if (!question.choices) question.choices = []; // eslint-disable-line no-param-reassign
    if (!choice) return;
    if (question.choices.includes(choice)) return;

    question.choices.push(choice);
    question.addChoice = ''; // eslint-disable-line no-param-reassign
  };

  $ctrl.addQuestion = question => {
    if (question.$invalid || question.addChoice.length || !question.choices.length) return;

    Question.createWithChoices(question, question.choices)
      .$promise
      .then(results => {
        console.log('results', results);
        return results;
      })
      .catch(err => {
        console.log('err', err);
        return $q.reject(err);
      });
    console.log('Question', Question);
    console.log('question', question);
  };
}
