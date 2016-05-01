module.exports = function (app, callback) {
  if (process.env.STARTED === 'TRUE') return callback();

  console.log('Creating Questions...');

  const Question = app.models.Question;
  const Admin = app.models.Admin;

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

  Admin.findOne({})
    .then(admin => {
      const survey = surveyQuestions.map(question => ({
        text: question,
        choices: surveyAnswers.map((text, order) => ({ text, order })),
        creator: admin,
      }));
      return Promise.all(survey.map(question => Question.create(question)));
    })
    .then(data => _callback(null, data))
    .catch(_callback);

  function _callback(error, data) {
    if (error) console.error('create-surveyQuestions error', error);

    console.log('Created %d Questions', data.length);

    if (callback) callback(error, data);
    return error ? Promise.reject(error) : Promise.resolve(data);
  }
};
