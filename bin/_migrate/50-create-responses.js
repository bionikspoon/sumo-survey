/* eslint no-console:0 */
const _ = require('lodash');

module.exports = function createResponses(app) {
  const { Question, Guest, Response } = app.models;
  console.log('Creating Responses...');

  let questions;

  // create responses
  return Question.find({ include: 'choices' })  // get Questions
    .then(data => { questions = data; }) // save questions for later
    .then(() => Guest.find()) // get Guests

    // prepare responses ...
    .then(guests =>
      // for each guest ...
      guests.map(guest =>
        // respond to several questions
        questions
          .filter(() => Math.random() > 0.2) // randomly skip a question
          .map(question => ({ guest, question, choice: _.sample(question.choices()) })) // randomly pick a choice
      ) // flatten to get list of responses
    )

    // persist responses
    .then(responses => Response.create(responses))

    // log results
    .then(logResults);

  function logResults(responses) {
    return Response.count()
      .then(count => {
        console.log('Created %s Responses.', count);
        return responses;
      });
  }
};

