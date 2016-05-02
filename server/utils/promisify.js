module.exports = promisify;

/**
 * Create a promise from a callback
 * @param {function(Error, *)} [callback] Original callback
 * @param {bool} [success] Set true for then block.
 * @returns {_callback}
 */
function promisify(callback, success = false) {
  return _callback;

  /**
   * Callback wrapper
   * @param {*|null} error
   * @param {*} data
   * @returns {Promise}
   * @private
   */
  function _callback(error, data) {
    if (success) [ error, data ] = [ null, error ]; // eslint-disable-line no-param-reassign

    if (error) console.error(error); // eslint-disable-line no-console
    if (callback) callback(error, data);

    return error ? Promise.reject(error) : Promise.resolve(data);
  }
}
