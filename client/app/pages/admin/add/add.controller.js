import angular from 'angular';
import uiRouter from 'angular-ui-router';
import LoopbackService from 'services/Loopback';

const MODULE_NAME = 'app.page.admin.add.controller';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ uiRouter, LoopbackService ])
  .controller('AddController', AddController);

/** @ngInject **/
function AddController($log, $state, $q, Question) {
  const $ctrl = this;

  ////////////////

  $ctrl.submit = question => {
    if ($ctrl.canAddChoice(question)) $ctrl.addChoice(question);
    else if ($ctrl.canAddQuestion(question)) $ctrl.addQuestion(question);
  };

  $ctrl.canAddChoice = ({ addChoice, choices }) => {
    if (angular.isUndefined(addChoice)) return false;
    if (!addChoice.text.length) return false;
    if (angular.isDefined(choices) && choices.map(choice => choice.text).includes(addChoice.text)) return false;

    return true;
  };

  $ctrl.canAddQuestion = ({ $valid, text, addChoice, choices }) => {
    if ($valid !== true) return false;
    if (angular.isUndefined(text) || !text.length) return false;
    if (addChoice && angular.isDefined(addChoice.text) && addChoice.text.length) return false;
    if (angular.isUndefined(choices) || !choices.length) return false;

    return true;
  };

  $ctrl.addChoice = question => {
    if (!$ctrl.canAddChoice(question)) return;

    question.choices = question.choices || [];
    question.choices.push(angular.copy(question.addChoice));
    question.addChoice.text = '';
  };

  $ctrl.addQuestion = question => {
    if (!$ctrl.canAddQuestion(question)) return;

    const { text, choices } = question;
    Question.createWithChoices({ text, choices })
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
