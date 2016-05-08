/* eslint no-console:0 */
const crypto = require('crypto');
const _ = require('lodash');

module.exports = function createGuests(app) {
  
  const { Guest } = app.models;
  console.log('Creating Guests...');

  return Promise.all(_.range(0, 15).map(() => Guest.create({ fingerprint: getFingerprint(), ip: getIp() })))
    .then(logResults);
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
