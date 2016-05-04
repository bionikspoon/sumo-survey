import angular from 'angular';
import LoopbackService from 'services/Loopback';

export default angular
  .module('app.services.Stats', [ LoopbackService.name ])
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
