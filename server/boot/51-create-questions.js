/* eslint no-console:0 */
const promisify = require('../../utils/promisify');

module.exports = function createQuestions(app, callback) {
  if (process.env.STARTED === 'TRUE') return callback();

  console.log('Creating Questions...');

  const Question = app.models.Question;
  const Admin = app.models.Admin;

  return Admin.findOne({})
    .then(admin => getSurvey(admin))
    .then(questions => Promise.all(questions.map(
      question => Question.createWithChoices(question)
    )))
    .then(logResults)
    .then(promisify(callback, true))
    .catch(promisify(callback));
};

function logResults(questions) {
  console.log('Created %d Questions', questions.length);
  console.log(
    'Created %d Choices',
    questions.reduce((count, question) => count + question.choices().length, 0)
  );

  return questions;
}

function getSurvey(admin) {
  // Satisfaction with life survey
  // credit: https://ppc.sas.upenn.edu/sites/ppc.sas.upenn.edu/files/lifesatisfactionscale.pdf
  const surveyQuestions = [
    'In most ways my life is close to my ideal.',
    'The conditions of my life are excellent.',
    'I am satisfied with life.',
    'So far I have gotten the important things I want in life.',
    'If I could live my life over, I would change almost nothing.',
  ];
  const surveyAnswers = [
    'Strongly Disagree',
    'Disagree',
    'Slightly Disagree',
    'Neither Agree or Disagree',
    'Slightly Agree',
    'Agree',
    'Strongly Agree',
  ];

  return surveyQuestions.map(question => ({
    text: question,
    choices: surveyAnswers.map((text, order) => ({ text, order })),
    creator: admin,
  }));
}

