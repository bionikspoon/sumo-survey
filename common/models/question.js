'use strict';

module.exports = function (Question) {
  /**
   * Create a Question with Choices
   * @param {Question} data Question to create
   * @param {function(Error, Question)} callback
   */

  Question.createWithChoices = function (data, callback) {
    var question;
    // TODO
    callback(null, question);
  };

  // /**
  //  * Create a question with choices.
  //  * @param {string} text Question text
  //  * @param {array} choices Question choices
  //  * @param {function(Error, number)} callback
  //  */
  //
  // Question.createWithChoices = function (text, choices, callback) {
  //   const _choices = choices.map(text => ({ text }));
  //   let _question;
  //
  //   Question.create({ text }, createChoices);
  //
  //   function createChoices(err, question) {
  //     if (err) return callback(err);
  //     _question = question;
  //
  //     question.__create__choices(_choices, response);
  //   }
  //
  //   function response(err, choices) {
  //     _question.choices = choices;
  //     return callback(err, _question)
  //   }
  //
  // };

};


