const loopback = require('loopback');
const _ = require('lodash/fp');
const app = require('../../server/server');

module.exports = function setup(Guest) {
  Guest.observe('access', includeClientIp);
  Guest.createResponse = createResponse;
  Guest.getAllUnanswered = getAllUnanswered;
  Guest.getOneUnanswered = getOneUnanswered;

  /**
   * Include client ip in query
   * @param {object} context
   * @param {function} next
   * @returns {null}
   */
  function includeClientIp(context, next) {
    if (!context.query.where || context.query.where.ip !== undefined) return next();

    Object.assign(context.query.where, { ip: getClientIp() });
    return next();
  }

  /**
   * Create a guest response.
   * @param {string} fingerprint
   * @param {response} response Response data
   * @return {*}
   */
  function createResponse(fingerprint, response) {
    const { choiceId, questionId } = response;

    return Guest.findOrCreate({ fingerprint })
      .then(data => data[ 0 ])
      .then(guest => guest.responses.create({ choiceId, questionId }));
  }

  /**
   * Get unanswered questions
   * @param {string} fingerprint Guest fingerprint
   * @param {object} [filter] Filter results
   * @returns {*|Promise.<T>}
   */
  function getAllUnanswered(fingerprint, filter) {
    const { Question } = app.models;
    return Guest.findOrCreate({ fingerprint })
      .then(data => data[ 0 ])

      // get guest id
      .then(guest => {
        const guestId = guest.id.fingerprint;

        // get questions, include responses by guest
        return Question.find(
          {
            include: [
              {
                relation: 'responses',
                scope: { where: { guestId }, fields: [ 'guestId' ] },
              },
              {
                relation: 'choices',
              },
            ],
          }
        );
      })
      // filter questions answered by guest
      .then(questions => questions.filter(question => !question.responses().length));
  }

  /**
   * Get one unanswered question
   * @param {string} fingerprint Guest fingerprint
   * @returns {*}
   */
  function getOneUnanswered(fingerprint) {
    return Guest.getAllUnanswered(fingerprint)
      .then(questions => (questions.length ? _.sample(questions) : {}));
  }
};

/**
 * Get current request client ip
 * @returns {string} client ip
 */
function getClientIp() {
  const ctx = loopback.getCurrentContext();
  // noinspection JSAccessibilityCheck
  return ctx ? ctx.get('clientIp') : '0.0.0.0';
}
