const loopback = require('loopback');
const _ = require('lodash/fp');
const app = require('../../server/server');

module.exports = function setup(Guest) {
  Guest.observe('access', includeClientIp);
  Guest.observe('before save', includeClientIp);
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
    const ip = getClientIp();
    if (ipNotSet(context.query, 'where')) Object.assign(context.query.where, { ip });
    if (ipNotSet(context.instance)) Object.assign(context.instance, { ip });

    return next();
  }

  /**
   * Create a guest response.
   * @param {string} fingerprint
   * @param {response} response Response data
   * @returns {Promise.<T>}
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
   * @param {string} [ip] Guest ip
   * @param {object} [filter] filter results
   * @returns {Promise.<T>}
   */
  function getAllUnanswered(fingerprint, ip, filter = {}) {
    const { Question } = app.models;

    return Guest.findOrCreate({ fingerprint, ip })
      .then(data => data[ 0 ])

      // get guest id
      .then(guest => {
        const guestId = guest.id.fingerprint;
        const guestFilter = {
          include: [
            {
              relation: 'responses',
              scope: { where: { guestId }, fields: [ 'guestId' ] },
            },
            {
              relation: 'choices',
            },
          ],
        };

        // get questions, include responses by guest
        return Question.find(Object.assign({}, filter, guestFilter));
      })
      // filter questions answered by guest
      .then(questions => questions.filter(question => !question.responses().length));
  }

  /**
   * Get one unanswered question
   * @param {string} fingerprint Guest fingerprint
   * @param {string} [ip] Guest ip
   * @param {object} [filter] filter results
   * @returns {Promise.<T>}
   */
  function getOneUnanswered(fingerprint, ip, filter = {}) {
    return Guest.getAllUnanswered(fingerprint, ip, filter)
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

/**
 * Check if ip is set in query
 * @param {object} obj
 * @param {string} [field]
 * @returns {boolean}
 */
function ipNotSet(obj, field) {
  if (!obj) return false;
  if (field) return obj[ field ] && obj[ field ].ip === undefined;
  return obj.ip === undefined;
}
