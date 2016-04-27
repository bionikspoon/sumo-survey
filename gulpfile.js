'use strict';

const gulp = require('gulp');
const gulpUtil = require('gulp-util');

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

gulp.task('default', [ 'clean', 'browser-sync' ]);

gulp.task('clean', callback => fs.emptyDir(PATHS.dist(), callback));

gulp.task('browser-sync', [ 'clean', 'nodemon' ], () => {
  const bundler = webpack(webpackConfig);

  setTimeout(startBrowserSync, 500); // eslint-disable-line angular/timeout-service

  function startBrowserSync() {
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

      proxy: 'http://localhost:3000',
      port: 5000,
      open: false,
    });
  }
});

gulp.task('loopback-angular', () => gulp
  .src('./server/server.js')
  .pipe(loopbackAngular())
  .pipe(rename('index.js'))
  .pipe(gulp.dest('./client/loopbackServices'))
);

gulp.task('browser-sync-reload', [ 'loopback-angular' ], () => { browserSync.reload({ stream: false }) });

let started = false;

gulp.task('nodemon', [ 'clean', 'loopback-angular' ], callback =>
  nodemon({
    script: './',
    watch: [ 'server/**/*', 'common/**/*' ],
  })
    .on('start', () => {
      if (!started) { callback(); }
      started = true;
    })
    .on('restart', () => {
      gulp.start('loopback-angular');
    })
);
