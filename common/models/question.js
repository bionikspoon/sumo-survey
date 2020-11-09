const _ = require('lodash');
const loopback = require('loopback');
const Promise = require('bluebird');

module.exports = (Question) => {
  Question.validatesPresenceOf('text');
  Question.validatesLengthOf('text', { max: 512 });
  Question.createWithChoices = createWithChoices;
  Question._createWithChoices = _createWithChoices;
  Question.statsSummary = statsSummary;
  Question.prototype.statsQuestion = statsQuestion;

  /**
   * Create a new Question with Choices and persist it into the data source.
   * @param {[question]|question} data Model instance data
   * @return {Promise.<[question]|question>}
   */
  function createWithChoices(data) {
    const ctx = loopback.getCurrentContext();
    // noinspection JSAccessibilityCheck
    const currentUser = ctx ? ctx.get('currentUser') : undefined;
    if (!currentUser) return Promise.reject(new Error('Current User not found in current context'));
    // normalize input to array
    return Question._createWithChoices(data, currentUser);
  }

  function _createWithChoices(data, creator) {
    return _.isArray(data) ? createMany(data) : createOne(data);

    function createMany(dataItems) {
      // for each data item ...
      return Promise.all(dataItems.map(createOne));
    }

    function createOne(dataItem) {
      // pop choices
      const choices = _.isFunction(dataItem.choices) ? dataItem.choices() : dataItem.choices;
      delete dataItem.choices;
      if (creator) dataItem.creatorId = creator.id;

      // create question
      return (
        Question.create(dataItem)
          // add choices to question ...
          .then((question) => {
            // Guard, no choices
            if (!choices || !choices.length) return question;

            // create choices
            return (
              question.choices
                .create(choices)
                // return original question
                .then(() => question)
            );
          })
      );
    }
  }

  /**
   * Get response count by question
   * @param {object} [filter] Filter defining fields, where, include, order, offset, and limit
   * @return {Promise.<[question]>} Questions including response count
   */
  function statsSummary(filter = {}) {
    return Question.find(filter).then((questions) =>
      Promise.all(
        questions.map((question) =>
          question.responses.count().then((count) => Object.assign(question.toObject(), { count }))
        )
      )
    );
  }

  /**
   * Get response count by choice
   * @param {object} [filter] Filter defining fields, where, include, order, offset, and limit
   * @return {Promise.<question>} Question including response count by choice
   */
  function statsQuestion(filter = {}) {
    const question = this;
    const choicesAsync = Promise.promisify(question.choices);
    return choicesAsync(filter)
      .then((choices) =>
        Promise.all(
          choices.map((choice) => choice.responses.count().then((count) => Object.assign(choice.toObject(), { count })))
        )
      )
      .then((choices) => Object.assign(question.toObject(), { choices }));
  }
};
