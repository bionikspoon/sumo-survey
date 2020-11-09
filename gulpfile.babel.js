import gulp from 'gulp';
import gulpUtil from 'gulp-util';
import gulpRename from 'gulp-rename';
// const runSequence = require('run-sequence');
import gulpLoopbackSDKAngular from 'gulp-loopback-sdk-angular';
import fs from 'fs-extra';
import _browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import webpackConfig from './webpack.config.js';
import gulpNodemon from 'gulp-nodemon';

import autoupdateScript from './scripts/autoupdate';
import migrateScript from './scripts/migrate';

const BROWSER_SYNC = _browserSync.create();

const PATHS = webpackConfig.PATHS;
const SERVER = webpackConfig.SERVER;

export const autoupdate = () => autoupdateScript();
export const migrate = () => migrateScript();

export const dev = gulp.series(clean, migrate, loopbackAngular, nodemon, browserSync);
export default gulp.series(dev);

export const build = gulp.series(clean, loopbackAngular, bundle);

export function clean() {
  return fs.emptyDir(PATHS.dist());
}

export function loopbackAngular() {
  return gulp
    .src(PATHS.server('server.js'))
    .pipe(gulpLoopbackSDKAngular())
    .pipe(gulpRename('index.js'))
    .pipe(gulp.dest(PATHS.client('lbServices')));
}

export function browserSync(callback) {
  const bundler = webpack(webpackConfig);

  return BROWSER_SYNC.init(
    {
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
    },
    callback
  );
}

export const browserSyncReload = gulp.series(loopbackAngular, () =>
  Promise.resolve(BROWSER_SYNC.reload({ stream: false }))
);

export function nodemon(callback) {
  let started;

  process.env.STARTED = 'FALSE';
  gulpNodemon({
    script: './',
    watch: ['server/**/*', 'common/**/*'],
    tasks: ['autoupdate', 'loopbackAngular'],
  }).on('start', () => {
    if (!started) {
      started = true;
      process.env.STARTED = 'TRUE';
      callback();
    }
  });
}

export function bundle(callback) {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gulpUtil.PluginError('webpack', err);

    gulpUtil.log('[webpack]', stats.toString(webpackConfig.stats));

    return callback();
  });
}
