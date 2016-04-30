'use strict';

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
    return create(data)
      .then(question => {
        if (!data.choices) return question;
        return Promise.all(data.choices.map(choice => question.choices.create(choice)))
          .then(() => question);
      })
      .then(question => _callback(null, question))
      .catch(_callback);

    /**
     * Promisify callback.
     * @param {Error} error
     * @param {question} data
     * @returns {Promise}
     * @private
     */
    function _callback(error, data) {
      if (error) console.error('Question.create error', error);

      if (callback) callback(error, data);
      return error ? Promise.reject(error) : Promise.resolve(data);
    }
  };

};
