import angular from 'angular';
import Fingerprint from 'fingerprintjs2';

import servicesLocalStorage from 'services/LocalStorage';

const KEY = 'fingerprint';

export default angular
  .module('app.services.Fingerprint', [ servicesLocalStorage.name ])
  .factory('Fingerprint', FingerprintService);

/** @ngInject **/
function FingerprintService($log, $q, LocalStorage) {
  const service = {
    getFingerprint, stream, fingerprint: {},
  };
  return service;

  ////////////////

  function stream() {
    return getFingerprint()
      .then(id => {
        angular.copy({ id }, service.fingerprint);
        return id;
      })
      .catch(error => {
        angular.copy({}, service.fingerprint);
        $log.error('Fingerprint error:', error);

        return $q.reject(error);
      });
  }

  ////////////////
  function getFingerprint() {
    // const fingerprint = LocalStorage.get(KEY);
    const fingerprint = service.fingerprint.id;
    if (fingerprint) return $q.resolve(fingerprint);

    const defer = $q.defer();
    new Fingerprint().get(defer.resolve);

    return defer.promise;
  }
}
