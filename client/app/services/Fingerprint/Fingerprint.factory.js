import angular from 'angular';
import _FingerprintJS from 'fingerprintjs2';

const MODULE_NAME = 'app.service.fingerprint.factory';
export default MODULE_NAME;

angular.module(MODULE_NAME, []).value('FingerprintJS', _FingerprintJS).factory('Fingerprint', FingerprintService);

/** @ngInject **/
function FingerprintService($q, FingerprintJS) {
  const service = { stream, fingerprint: {} };
  return service;

  // //////////////

  function stream() {
    return getFingerprint()
      .then((id) => {
        angular.copy({ id }, service.fingerprint);
        return id;
      })
      .catch((error) => {
        angular.copy({}, service.fingerprint);
        return $q.reject(error);
      });
  }

  // //////////////
  function getFingerprint() {
    const fingerprint = service.fingerprint.id;
    if (fingerprint) return $q.resolve(fingerprint);

    const defer = $q.defer();
    new FingerprintJS().get(defer.resolve);

    return defer.promise;
  }
}
