const _ = require('lodash/fp');

module.exports = function (app) {
  const { Guest, Question } = app.models;

  /**
   * Get unanswered questions
   * @param {string} fingerprint Guest fingerprint
   * @param {object} filter Filter results
   * @param {function(Error, [question])} callback
   */

  Guest.getUnanswered = function (fingerprint, filter, callback) {
    callback = _callback.bind(null, callback);
    let guestId;

    return Guest.findOrCreateWithIp(fingerprint)

      // get guest id
      .then(guest => {
        guestId = guest.id;
        return guest;
      })

      // get questions, include responses by guest
      .then(guest => Question.find(
        {
          include: [
            {
              relation: 'responses',
              scope: {
                where: { guestId },
                fields: [ 'guestId' ]
              }
            },
            {
              relation: 'choices'
            }
          ]
        }
      ))

      // filter questions answered by guest
      .then(questions =>
        // for each question ...
        Promise.all(questions.map(question =>
            question.responses.count()
              // return question if unanswered else null
              .then(count => count === 0 ? question : null)
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

  Guest.getUnansweredFindOne = function (fingerprint, callback) {
    callback = _callback.bind(null, callback);
    return Guest.getUnanswered(fingerprint)
      .then(questions => questions.length ? questions[ 0 ] : {})
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
  if (error) console.error('Guest.createResponse ', error);

  if (callback) callback(error, data);
  return error ? Promise.reject(error) : Promise.resolve(data);
}
