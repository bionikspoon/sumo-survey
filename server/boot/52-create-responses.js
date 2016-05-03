/* eslint no-console:0 */
const promisify = require('../utils/promisify');
const _ = require('lodash');

module.exports = function createResponses(app, callback) {
  if (process.env.STARTED === 'TRUE') return callback();

  const { Question, Guest, Response } = app.models;
  console.log('Creating Guests...');

  // create responses
  // get Questions
  return Question.find({ include: 'choices' })
    // get Guests
    .then(questions => Guest.find({})
      .then(guests =>
        // build responses
        // for each guest...
        guests.map(guest =>
          questions
            .filter(() => Math.random() > 0.2) // randomly skip a question
            // for each question...
            .map(question =>
              // set response with randomly selected choice
              ({ guest, question, choice: _.sample(question.choices()) })
            )
        )
      )
    )
    // persist responses
    .then(responses => Promise.all(responses.map(response => Response.create(response))))

    .then(logResults)
    .then(promisify(callback, true))
    .catch(promisify(callback));
};

function logResults(responses) {
  console.log('Created %s Responses.', _.flatten(responses).length);
  return responses;
}
