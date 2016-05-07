/* eslint no-console:0 */
const promisify = require('../../utils/promisify');
const crypto = require('crypto');
const _ = require('lodash/fp');

module.exports = function createGuests(app, callback) {
  if (global.STARTED === true) return callback();

  const { Guest } = app.models;
  console.log('Creating Guests...');

  return Promise.all(_.range(0, 15).map(() => Guest.create({ fingerprint: getFingerprint(), ip: getIp() })))
    .then(logResults)
    .then(promisify(callback, true))
    .catch(promisify(callback));
};

function logResults(guests) {
  console.log('Created %d Guests.', guests.length);
  return guests;
}

function getFingerprint() {
  return crypto.randomBytes(16).toString('hex');
}

function getIp() {
  const digit = () => _.random(0, 127);
  return _.range(0, 4).map(digit).join('.');
}
