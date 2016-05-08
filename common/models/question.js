const _ = require('lodash');
module.exports = function setup(Question) {
  Question.createWithChoices = createWithChoices;
  /**
   * Create a new Question model with Choices and persist it into the data source.
   * @param {[question]|question} data Model instance data
   * @return {Promise.<[question]|question>}
   */
  function createWithChoices(data) {
    // normalize input to array
    return _.isArray(data) ? createMany(data) : createOne(data);

    function createMany(dataItems) {
      // for each data item ...
      return Promise.all(dataItems.map(createOne))
    }

    function createOne(dataItem) {
      // pop choices
      const choices = _.isFunction(dataItem.choices) ? dataItem.choices() : dataItem.choices;
      delete dataItem.choices;

      // create question
      return Question.create(dataItem)
        // add choices to question ...
        .then(question => {
          // Guard, no choices
          if (!choices || !choices.length) return question;

          // create choices
          return question.choices.create(choices)
            // return original question
            .then(() => question);
        });
    }
  }
};
