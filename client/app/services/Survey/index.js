import angular from 'angular';
import LoopbackService from 'services/Loopback';
import FingerprintService from 'services/Fingerprint';

export default angular
  .module('app.services.survey', [ LoopbackService.name, FingerprintService.name ])
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
