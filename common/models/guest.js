const loopback = require('loopback');

module.exports = function setupGuest(Guest) {
  /**
   * Find or create a guest with IP meta data.
   * @param {string} fingerprint
   * @param {function(Error, guest)} callback
   * @return {*|Promise.<T>}
   */
  Guest.findOrCreateWithIp = function findOrCreateWithIp(fingerprint, callback) {
    callback = _callback.bind(null, callback); // eslint-disable-line no-param-reassign
    const ctx = loopback.getCurrentContext();
    // noinspection JSAccessibilityCheck
    const ip = ctx ? ctx.get('clientIp') : null;

    return Guest.findOrCreate({ fingerprint, ip })
      .then(data => data[ 0 ])
      .then(guest => callback(null, guest))
      .catch(callback);
  };

  /**
   * Create a guest response.
   * @param {string} fingerprint
   * @param {response} response Response data
   * @param {function(Error, response)} callback
   */
  Guest.createResponse = function createResponse(fingerprint, response, callback) {
    callback = _callback.bind(null, callback); // eslint-disable-line no-param-reassign
    const { choiceId, questionId } = response;

    return Guest.findOrCreateWithIp(fingerprint)
      .then(guest => guest.responses.create({ choiceId, questionId }))
      .then(data => callback(null, data))
      .catch(callback);
  };
};

/**
 * Promisify callback.
 * @param {function(Error, *)}callback
 * @param {Error} error
 * @param {*} data
 * @returns {Promise}
 * @private
 */
function _callback(callback, error, data) {
  // eslint-disable-next-line no-console
  if (error) console.error('Guest.createResponse ', error);

  if (callback) callback(error, data);
  return error ? Promise.reject(error) : Promise.resolve(data);
}
