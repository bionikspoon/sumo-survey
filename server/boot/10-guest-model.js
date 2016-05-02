const loopback = require('loopback');
const _ = require('lodash/fp');
const promisify = require('../utils/promisify');

module.exports = function setupGuest(app) {
  const { Guest, Question } = app.models;

  /**
   * Get unanswered questions
   * @param {string} fingerprint Guest fingerprint
   * @param {object} [filter] Filter results
   * @param {function(Error, [question])} [callback]
   * @returns {*|Promise.<T>}
   */
  Guest.getAllUnanswered = function getAllUnanswered(fingerprint, filter, callback) {
    return Guest.findOrCreateWithIp(fingerprint)

      // get guest id
      .then(guest => {
        const guestId = guest.id;

        // get questions, include responses by guest
        return Question.find(
          {
            include: [
              {
                relation: 'responses',
                scope: {
                  where: { guestId },
                  fields: [ 'guestId' ],
                },
              },
              {
                relation: 'choices',
              },
            ],
          }
        );
      })

      // filter questions answered by guest
      .then(questions =>
        // for each question ...
        Promise.all(questions.map(question =>
            question.responses.count()
              // return question if unanswered else null
              .then(count => (count === 0 ? question : null))
          ))
          // remove null values
          .then(_.filter(_.identity))
      )

      // return unanswered questions
      .then(promisify(callback, true))
      .catch(promisify(callback));
  };

  /**
   * Get one unanswered question
   * @param {string} fingerprint Guest fingerprint
   * @param {function(Error, question)} [callback]
   * @returns {*}
   */
  Guest.getOneUnanswered = function getOneUnanswered(fingerprint, callback) {
    return Guest.getAllUnanswered(fingerprint)
      .then(questions => (questions.length ? questions[ 0 ] : {}))
      .then(promisify(callback, true))
      .catch(promisify(callback));
  };

  /**
   * Find or create a guest with IP meta data.
   * @param {string} fingerprint
   * @param {function(Error, guest)} [callback]
   * @return {*|Promise.<T>}
   */
  Guest.findOrCreateWithIp = function findOrCreateWithIp(fingerprint, callback) {
    const ctx = loopback.getCurrentContext();
    // noinspection JSAccessibilityCheck
    const ip = ctx ? ctx.get('clientIp') : null;

    return Guest.findOrCreate({ fingerprint, ip })
      .then(data => data[ 0 ])
      .then(promisify(callback, true))
      .catch(promisify(callback));
  };

  /**
   * Create a guest response.
   * @param {string} fingerprint
   * @param {response} response Response data
   * @param {function(Error, response)} [callback]
   * @return {*}
   */
  Guest.createResponse = function createResponse(fingerprint, response, callback) {
    const { choiceId, questionId } = response;

    return Guest.findOrCreateWithIp(fingerprint)
      .then(guest => guest.responses.create({ choiceId, questionId }))
      .then(promisify(callback, true))
      .catch(promisify(callback));
  };
};
