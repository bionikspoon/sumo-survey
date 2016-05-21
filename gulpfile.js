'use strict'; // eslint-disable-line strict
require('babel-register');

const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const runSequence = require('run-sequence');
const rename = require('gulp-rename');
const loopbackAngular = require('gulp-loopback-sdk-angular');
const fs = require('fs-extra');
const browserSync = require('browser-sync').create();

const webpackConfig = require('./webpack.config.js');
const PATHS = webpackConfig.PATHS;
const SERVER = webpackConfig.SERVER;

gulp.task('default', [ 'dev' ]);

gulp.task('dev', callback => {
  runSequence(
    'clean',
    [ 'migrate', 'loopback-angular' ],
    'nodemon',
    'browser-sync',
    callback
  );
});

gulp.task('build', callback => {
  runSequence(
    'clean',
    'loopback-angular',
    'bundle',
    callback
  );
});

gulp.task('clean', callback => fs.emptyDir(PATHS.dist(), callback));

gulp.task('migrate', callback => {
  const migrate = require('./bin/_migrate');

  migrate()
    .then(() => callback())
    .catch(callback);
});

gulp.task('autoupdate', callback => {
  const autoupdate = require('./bin/_autoupdate');

  autoupdate()
    .then(() => callback())
    .catch(callback);
});

gulp.task('loopback-angular', () => gulp
  .src(PATHS.server('server.js'))
  .pipe(loopbackAngular())
  .pipe(rename('index.js'))
  .pipe(gulp.dest(PATHS.client('lbServices')))
);

gulp.task('browser-sync', callback => {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const bundler = webpack(webpackConfig);

  browserSync.init({
    baseDir: PATHS.client(),

    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: webpackConfig.stats,
        noInfo: webpackConfig.devServer.noInfo,
      }),

      webpackHotMiddleware(bundler),
    ],

    proxy: SERVER.PROXY_URL,
    port: SERVER.PORT,
    open: false,
  }, callback);
});

gulp.task('browser-sync-reload', [ 'loopback-angular' ], callback => {
  browserSync.reload({ stream: false });
  process.nextTick(callback);
});

gulp.task('nodemon', callback => {
  const nodemon = require('gulp-nodemon');
  let started;

  process.env.STARTED = 'FALSE';
  nodemon({
    script: './',
    watch: [ 'server/**/*', 'common/**/*' ],
    tasks: [ 'autoupdate', 'loopback-angular' ],
  })
    .on('start', () => {
      if (!started) {
        started = true;
        process.env.STARTED = 'TRUE';
        callback();
      }
    });
});

gulp.task('bundle', callback => {
  const webpack = require('webpack');

  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gulpUtil.PluginError('webpack', err);

    gulpUtil.log('[webpack]', stats.toString(webpackConfig.stats));

    return callback();
  });
});
