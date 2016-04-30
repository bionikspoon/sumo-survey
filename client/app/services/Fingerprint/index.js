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
    ensure, id: '',
  };
  return service;

  ////////////////

  function ensure() {
    return getFingerprint();
  }

  ////////////////
  function getFingerprint() {
    const fingerprint = LocalStorage.get(KEY);
    if (fingerprint) return $q.resolve(fingerprint);

    const defer = $q.defer();
    new Fingerprint().get(result => {
      console.log('result', result);
      LocalStorage.set(KEY, result);
      return defer.resolve(result);
    });

    return defer.promise;
  }
}
