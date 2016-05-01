'use strict'; // eslint-disable-line strict

const gulp = require('gulp');
const gulpUtil = require('gulp-util');
const runSequence = require('run-sequence');

const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');
const rename = require('gulp-rename');
const loopbackAngular = require('gulp-loopback-sdk-angular');
const fs = require('fs-extra');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.js');

const PATHS = webpackConfig.PATHS;
const HOST = webpackConfig.HOST;
const PORT = webpackConfig.PORT;
const PROXY_TARGET = { host: HOST, port: 3000 };
PROXY_TARGET.url = `http://${PROXY_TARGET.host}:${PROXY_TARGET.port}`;

gulp.task('default', [ 'start' ]);
gulp.task('start', callback => {
  runSequence(
    'clean',
    'loopback-angular',
    'nodemon',
    [ 'browser-sync' ],
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

gulp.task('loopback-angular', () => gulp
  .src(PATHS.server('server.js'))
  .pipe(loopbackAngular())
  .pipe(rename('index.js'))
  .pipe(gulp.dest(PATHS.src('loopbackServices')))
);

gulp.task('browser-sync', callback => {
  const bundler = webpack(webpackConfig);

  browserSync.init({
    baseDir: PATHS.src(),

    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: webpackConfig.stats,
        noInfo: webpackConfig.stats,
      }),

      webpackHotMiddleware(bundler),
    ],

    proxy: PROXY_TARGET.url,
    port: PORT,
    open: false,
  }, callback);
});

gulp.task('browser-sync-reload', [ 'loopback-angular' ], callback => {
  browserSync.reload({ stream: false });
  process.nextTick(callback);
});

gulp.task('nodemon', callback => {
  let started;
  process.env.STARTED = 'FALSE';
  nodemon({
    script: './',
    watch: [ 'server/**/*', 'common/**/*' ],
  })
    .on('start', () => {
      if (!started) {
        started = true;
        process.env.STARTED = 'TRUE';
        callback();
      }
    })
    .on('restart', () => gulp.start('loopback-angular'));
});

gulp.task('bundle', callback => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gulpUtil.PluginError('webpack', err);

    gulpUtil.log('[webpack]', stats.toString(webpackConfig.stats));

    callback();
  });
});
