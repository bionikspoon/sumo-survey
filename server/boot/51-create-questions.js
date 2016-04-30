module.exports = function (app, cb) {
  const Question = app.models.Question;
  const Admin = app.models.Admin;

  // Satisfaction with life survey
  // credit: https://ppc.sas.upenn.edu/sites/ppc.sas.upenn.edu/files/lifesatisfactionscale.pdf
  const questions = [
    'In most ways my life is close to my ideal.',
    'The conditions of my life are excellent.',
    'I am satisfied with life.',
    'So far I have gotten the important things I want in life.',
    'If I could live my life over, I would change almost nothing.',
  ];
  const answers = [
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
      console.log('admin', admin);
      const survey = questions.map(question => ({
        text: question,
        choices: answers.map(answer => ({ text: answer })),
        creator: admin,
      }));
      console.log('survey', survey);

      return Promise.all(survey.map(question => Question.create(question)));
    })
    .then(data => {
      console.log('data', data);
      cb(null, data);
      return data;
    })
    .catch(cb);
};
