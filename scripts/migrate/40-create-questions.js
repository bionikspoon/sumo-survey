/* eslint no-console:0 */
module.exports = function createQuestions(app) {
  console.log('Creating Questions...');

  const { Question, Admin, Choice } = app.models;

  return Admin.findOne({})
    .then((admin) => getSurvey(admin))
    .then((questions) => Question._createWithChoices(questions))
    .then(logResults);

  function logResults(questions) {
    return Question.count()
      .then((questionCount) => console.log('Created %d Questions', questionCount))
      .then(() => Choice.count())
      .then((choiceCount) => console.log('Created %d Choices', choiceCount))
      .then(() => questions);
  }
};

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

  return surveyQuestions.map((question) => ({
    text: question,
    choices: surveyAnswers.map((text, order) => ({ text, order })),
    creator: admin,
  }));
}
