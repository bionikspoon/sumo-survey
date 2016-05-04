import angular from 'angular';
import LoopbackService from 'services/Loopback';
import FingerprintService from 'services/Fingerprint';

const MODULE_NAME = 'app.services.survey';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [ LoopbackService, FingerprintService ])
  .factory('Survey', Survey);

/** @ngInject **/
function Survey($log, Guest, Fingerprint) {
  const service = { question, answer };
  return service;

  ////////////////

  function question() {
    return Fingerprint.stream()
      .then(fingerprint => Guest.getOneUnanswered({ fingerprint }).$promise);
  }

  function answer(response) {
    return Fingerprint.stream()
      .then(fingerprint => Guest
        .createResponse({ fingerprint }, response)
        .$promise);
  }
}
