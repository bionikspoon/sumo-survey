module.exports = function (app, cb) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
   */
  if (process.env.STARTED === 'true') {return cb();}
  console.log('process.env.STARTED', process.env.STARTED);
  const Note = app.models.Note;
  app.dataSources.sql.automigrate(err => {
    if (err) {return cb(err)}

    Note.create([
      { title: 'More tests', content: 'the explosion of the shame traps.' },
      { title: 'That\'s enough test', content: 'You have to rise, and need relativity by your shining.' },
      { title: 'Another Todo', content: 'Man gains when you fear with booda-hood.' }
    ], cb);
  });
};
