const promisify = require('../utils/promisify');

module.exports = function setupQuestion(app) {
  const Question = app.models.Question;
  const createQuestion = Question.create.bind(Question);

  /**
   * Create a new instance of the model and persist it into the data source.
   * @param {question} data Model instance data
   * @param {function(Error, question)} [callback]
   * @return {*|Promise.<T>}
   */
  Question.create = function create(data, callback) {
    return createQuestion(data)
      .then(question => {
        if (!data.choices) return question;
        return Promise.all(data.choices.map(choice => question.choices.create(choice)))
          .then(() => question);
      })
      .then(promisify(callback, true))
      .catch(promisify(callback));
  };
};
