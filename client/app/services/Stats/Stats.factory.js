import angular from 'angular';
import LoopbackService from 'services/Loopback';

const MODULE_NAME = 'app.service.stats.factory';
export default MODULE_NAME;

angular.module(MODULE_NAME, [LoopbackService]).factory('Stats', Stats);

/** @ngInject **/
function Stats(Question) {
  const service = { summary, question };
  return service;

  // //////////////

  function summary() {
    return Question.statsSummary().$promise;
  }

  function question(id) {
    const filter = { order: 'order' };
    return Question.prototype$statsQuestion({ id, filter }).$promise;
  }
}
