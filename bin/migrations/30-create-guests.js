/* eslint no-console:0 */
const crypto = require('crypto');
const _ = require('lodash');

module.exports = function createGuests(app) {

  const { Guest } = app.models;
  console.log('Creating Guests...');

  // prepare 15 random guests
  const guests = _.range(15).map(() => ({ fingerprint: getRandomFingerprint(), ip: getRandomIp() }));

  // persist Guests, promisify result
  const guestsPromise = new Promise((resolve, reject) =>
    Guest.create(guests, (err, data) => err ? reject(err) : resolve(data))
  );

  // return promise
  return guestsPromise
    .then(logResults);

  function logResults(data) {
    return Guest.count({ ip: '*' })
      .then(guestCount => console.log('Created %d Guests.', guestCount))
      .then(() => data);
  }
};

function getRandomFingerprint() {
  return crypto.randomBytes(16).toString('hex');
}

function getRandomIp() {
  const digit = () => _.random(127);
  return _.range(4).map(digit).join('.');
}
