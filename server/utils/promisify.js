module.exports = promisify;

function promisify(callback, success = false) {
  return _callback;

  function _callback(error, data) {
    if (success) [ error, data ] = [ null, error ]; // eslint-disable-line no-param-reassign

    if (error) console.error(error);
    if (callback) callback(error, data);

    return error ? Promise.reject(error) : Promise.resolve(data);
  }
}
