import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LoopbackService from 'services/Loopback';

const MODULE_NAME = 'app.pages.admin.add.controller';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ uiRouter, LoopbackService ])
  .controller('AddController', AddController);

/** @ngInject **/
function AddController($log, $state, $q, Question) {
  const $ctrl = this;
  $ctrl.name = 'AddController';

  ////////////////

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
        $log.error('AddController error: %s\n', error.data.error.message, error);
        return $q.reject(error);
      });
  };
}
