const _ = require('lodash/fp');

module.exports = function setupGuest(app) {
  const { Guest, Question } = app.models;

  /**
   * Get unanswered questions
   * @param {string} fingerprint Guest fingerprint
   * @param {object} filter Filter results
   * @param {function(Error, [question])} callback
   */

  Guest.getUnanswered = function getUnanswered(fingerprint, filter, callback) {
    callback = _callback.bind(null, callback); // eslint-disable-line no-param-reassign

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
      .then(response => callback(null, response))
      .catch(callback);
  };

  /**
   * Get one unanswered question
   * @param {string} fingerprint Guest fingerprint
   * @param {function(Error, question)} callback
   */

  Guest.getUnansweredFindOne = function getUnansweredFindOne(fingerprint, callback) {
    callback = _callback.bind(null, callback); // eslint-disable-line no-param-reassign
    return Guest.getUnanswered(fingerprint)
      .then(questions => (questions.length ? questions[ 0 ] : {}))
      .then(response => callback(null, response))
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
