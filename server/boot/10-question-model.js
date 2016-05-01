const loopback = require('loopback');

module.exports = function (app) {
  const Question = app.models.Question;
  //noinspection JSDuplicatedDeclaration
  const create = Question.create.bind(Question);

  /**
   * Create a new instance of the model and persist it into the data source.
   * @param {question} data Model instance data
   * @param {function(Error, question)} callback
   */
  Question.create = (data, callback) => {
    callback = _callback.bind(null, callback);
    return create(data)
      .then(question => {
        if (!data.choices) return question;
        return Promise.all(data.choices.map(choice => question.choices.create(choice)))
          .then(() => question);
      })
      .then(question => callback(null, question))
      .catch(callback);

  };
};

/**
 * Promisify callback.
 * @param callback
 * @param {Error} error
 * @param {question} data
 * @returns {Promise}
 * @private
 */
function _callback(callback, error, data) {
  if (error) console.error('Question.create error', error);

  if (callback) callback(error, data);
  return error ? Promise.reject(error) : Promise.resolve(data);
}
