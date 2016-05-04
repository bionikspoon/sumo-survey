import angular from 'angular';
import lbServices from 'client/lbServices';

export default angular
  .module('app.services.Stats', [ lbServices ])
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
