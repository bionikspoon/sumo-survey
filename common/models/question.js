module.exports = function setup(Question) {
  Question.createWithChoices = createWithChoices;
  /**
   * Create a new Question model with Choices and persist it into the data source.
   * @param {question} data Model instance data
   * @return {*|Promise.<[question]>}
   */
  function createWithChoices(data) {
    const choices = typeof data.choices === 'function' ? data.choices() : data.choices;
    delete data.choices;
    return Question.create(data)
      .then(question => {
        if (!choices || !choices.length) return question;

        // eslint-disable-next-line no-shadow
        return Promise.all(choices.map(choice => question.choices.create(choice)))
          .then(() => question);
      });
  }
};
