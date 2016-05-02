import angular from 'angular';
import lbServices from 'client/loopbackServices';
import servicesFingerprint from 'services/Fingerprint';

export default angular
  .module('app.services.survey', [ lbServices, servicesFingerprint.name ])
  .factory('Survey', Survey);

/** @ngInject **/
function Survey($log, Guest, Fingerprint) {
  const service = { question, answer };
  return service;

  ////////////////

  function question() {
    return Fingerprint.stream()
      .then(fingerprint => {
        return Guest.getOneUnanswered({ fingerprint }).$promise;
      });
  }

  function answer(response) {
    return Fingerprint.stream()
      .then(fingerprint => {
        return Guest
          .createResponse({ fingerprint }, response)
          .$promise;
      });
  }
}
