import angular from 'angular';
import LoopbackService from 'services/Loopback';

const MODULE_NAME = 'app.service.stats.factory';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ LoopbackService ])
  .factory('Stats', Stats);

/** @ngInject **/
function Stats(Question) {
  const service = { summary, question };
  return service;

  ////////////////

  function summary() {
    return Question
      .find({ filter: { include: [ 'responses' ] } })
      .$promise
      .then(questions => questions.map(_question =>
        Object.assign(_question, { count: _question.responses.length })
      ));
  }

  function question(id) {
    return Question
      .findOne({ filter: { where: { id }, include: { choices: 'responses' } } })
      .$promise
      .then(_question =>
        Object.assign(_question, {
          responses: _question.choices.map(choice =>
            Object.assign(choice, { count: choice.responses.length })
          ),
        })
      );
  }
}
