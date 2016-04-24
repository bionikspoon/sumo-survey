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

gulp.task('browser-sync', [ 'clean', 'loopback-angular', 'nodemon' ], () => {
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

    proxy: 'http://localhost:3000',
    // files: [ 'client/**/*.' ],
    port: 5000,
  })
});

gulp.task('loopback-angular', ()=> gulp
  .src('./server/server.js')
  .pipe(loopbackAngular())
  .pipe(rename('index.js'))
  .pipe(gulp.dest('./client/loopbackServices'))
);

gulp.task('browser-sync-reload', [ 'loopback-angular' ], () => {browserSync.reload({ stream: false })});

gulp.task('nodemon', callback => {
  let started = false;
  return nodemon({
    script: './',
    watch: [ 'server/**/*', 'common/**/*' ],
  })
    .on('start', () => {
      if (!started) {callback();}
      started = true;
    })
    .on('restart', function () {
      gulp.start('loopback-angular')
    });

});
