import angular from 'angular';
import LoopbackService from 'services/Loopback';

const MODULE_NAME = 'app.services.Stats';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ LoopbackService ])
  .factory('Stats', Stats);

/** @ngInject **/
function Stats($log, Question) {
  const service = { summary };
  return service;

  ////////////////

  function summary() {
    return Question
      .find({ filter: { include: [ 'responses', { choices: 'responses' } ] } })
      .$promise;
  }
}
