/* eslint default-case:0, angular/json-functions:0 */
require('babel-polyfill');

const _ = require('lodash');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const unipath = require('unipath');
const postcssImport = require('postcss-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

// ===========================================================================
// CONSTANTS
// ===========================================================================
const PATHS = {
  client: unipath('client'),
  app: unipath('client', 'app'),
  dist: unipath('dist'),
  server: unipath('server'),
  common: unipath('common'),
  modules: unipath('node_modules'),
  base: unipath(),
};
const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const TEST = 'test';
const LOADER_INCLUDES = [ PATHS.client() ];
const SERVER = {
  HOST: 'localhost',
  PORT: 5000,
  PROXY_PORT: 3000,
};
SERVER.URL = `http://${SERVER.HOST}:${SERVER.PORT}`;
SERVER.PROXY_URL = `http://${SERVER.HOST}:${SERVER.PROXY_PORT}`;

// ===========================================================================
// SETUP ENV
// ===========================================================================
const ENV = getEnv(process.env.npm_lifecycle_event);
const ENV_IS = {
  DEVELOPMENT: ENV === DEVELOPMENT,
  PRODUCTION: ENV === PRODUCTION,
  TEST: ENV === TEST,
};
const DEBUG = process.argv.includes('--debug');
const VERBOSE = process.argv.includes('--verbose');
const WATCH = ENV_IS.DEVELOPMENT || process.env.npm_lifecycle_event === 'test' || false;

// ===========================================================================
// CONFIG EXPORT
// ===========================================================================
module.exports = {
  entry: getEntry(ENV),

  output: {
    path: ENV_IS.TEST ? PATHS.dist('tests') : PATHS.dist(),
    publicPath: '/',
    filename: DEBUG ? '[name].js?[hash]' : '[name].[chunkhash].js',
    chunkFilename: DEBUG ? '[name].js?[chunkhash]' : '[name].[chunkhash].js',
    sourceMapFilename: '[file].map',
    sourcePrefix: '  ',
  },

  module: {
    preLoaders: getPreLoaders(ENV),
    loaders: getLoaders(ENV),
    noParse: [ /node_modules\/sinon\// ],
  },

  plugins: getPlugins(ENV),

  resolve: {
    root: [ PATHS.base(), PATHS.app() ],
    extensions: [ '', '.js' ],
    alias: { sinon: 'sinon/pkg/sinon.js' },
  },
  resolveLoader: {
    modulesDirectories: [ 'node_modules', PATHS.base() ],
  },
  devtool: ENV_IS.PRODUCTION ? 'source-map' : 'inline-source-map',
  devServer: { noInfo: !VERBOSE, colors: true, inline: true },
  postcss: getPostcss,
  cache: DEBUG,
  debug: DEBUG,
  target: 'web',
  progress: true,
  watch: WATCH,
  stats: getStatOptions(),
  PATHS,
  SERVER,
};

// ===========================================================================
// CONFIG ENV DEFINITIONS
// ===========================================================================
function getEntry(env) {
  const entry = {};

  switch (env) {
    case DEVELOPMENT:
      entry.main = [];
      // enforce order
      entry.main.push(PATHS.client('app.bootstrap.js'));
      entry.main.push(`webpack-hot-middleware/client?${SERVER.URL}&reload=true`);
      entry.vendor = require('./package.json').vendor;
      break;

    case PRODUCTION:
      entry.main = [];
      entry.main.push(PATHS.client('app.bootstrap.js'));
      entry.vendor = require('./package.json').vendor;
      break;

    case TEST:
      entry.bundle = [];
      entry.bundle.push('angular');
      entry.bundle.push(`mocha!${PATHS.client('tests.webpack')}`);
      break;
  }

  return entry;
}

function getPreLoaders(env) {
  const preLoaders = [
    { test: /\.js$/, include: LOADER_INCLUDES, loader: 'baggage?[dir].html&[dir].scss' },
  ];

  switch (env) {
    case DEVELOPMENT:
      preLoaders.push(
        { test: /\.js$/, include: [ PATHS.app() ], loaders: [ 'eslint' ] }
      );
      break;

    case PRODUCTION:
      preLoaders.push(
        { test: /\.js$/, include: [ PATHS.app() ], loaders: [ 'eslint' ] }
      );
      break;

    case TEST:
      // preLoaders.push(
      //   { test: /\.js/, include: LOADER_INCLUDES, loader: 'babel-istanbul' }
      // );
      break;
  }
  preLoaders.push({ test: /index\.js$/, include: [ PATHS.app() ], loader: 'angular-autoload' });
  return preLoaders;
}

function getLoaders(env) {
  const SASS_LOADER = { test: /\.scss$/, includes: LOADER_INCLUDES };
  const loaders = [
    { test: /\.js$/, loader: 'babel?cacheDirectory', include: LOADER_INCLUDES },
    {
      test: /\.html$/,
      loader: `ngtemplate?relativeTo=${PATHS.client()}!html?interpolate`,
      include: LOADER_INCLUDES,
    },
    { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
    { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
    { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
    { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
    { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url?limit=10000' },
  ];
  switch (env) {
    case DEVELOPMENT:
      loaders.push(_.merge(SASS_LOADER, {
        loaders: [
          'style?sourceMap',
          'css?sourceMap',
          'postcss?sourceMap',
          'sass?sourceMap',
        ],
      }));
      break;

    case PRODUCTION:
      loaders.unshift({ test: /\.js$/, loader: 'ng-annotate', include: LOADER_INCLUDES });
      loaders.push(_.merge(SASS_LOADER, {
        loader: ExtractTextPlugin.extract(''
          + 'css?minimize&sourceMap'
          + '!'
          + 'postcss?sourceMap'
          + '!'
          + 'sass?sourceMap'
        ),
      }));
      break;

    case TEST:
      loaders.push(_.merge(SASS_LOADER, { loader: 'null' }));
      break;
  }

  return loaders;
}

function getPlugins(env) {
  const plugins = [
    new HtmlPlugin(getHtmlOptions(env)),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env),
      __PRODUCTION__: JSON.stringify(ENV_IS.PRODUCTION),
    }),

    new webpack.optimize.OccurenceOrderPlugin(),
  ];

  switch (env) {
    case DEVELOPMENT:
      plugins.push(new webpack.HotModuleReplacementPlugin());
      plugins.push(new webpack.NoErrorsPlugin());
      plugins.push(new webpack.optimize.CommonsChunkPlugin({ names: [ 'vendor', 'manifest' ] }));
      plugins.push(new WriteFilePlugin({ log: VERBOSE }));
      break;

    case PRODUCTION:
      if (!DEBUG) plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }));

      plugins.push(new ExtractTextPlugin(DEBUG ? 'main.css?[chunkhash]' : 'main.[chunkhash].css'));
      plugins.push(new webpack.optimize.AggressiveMergingPlugin());
      plugins.push(new webpack.optimize.CommonsChunkPlugin({ names: [ 'vendor', 'manifest' ] }));
      plugins.push(new webpack.optimize.DedupePlugin());
      break;

    case TEST:
      break;
  }
  return plugins;
}

function getPostcss(bundler) {
  return [
    postcssImport({ addDependencyTo: bundler }),
    precss(),
    autoprefixer({ browsers: [ 'last 2 versions' ] }),
  ];
}

function getHtmlOptions(env) {
  const options = {
    inject: false,
    template: PATHS.client('index.ejs'),
    filename: 'index.html',
    title: 'Sumo Survey',
    mobile: true,
    unsupportedBrowser: true,
    appMountDirective: 'app-core',
    baseHref: '/',
    minify: DEBUG ? false : getHtmlMinifyOptions(),
  };

  switch (env) {
    case DEVELOPMENT:
      options.baseHref = `${SERVER.URL}/`;
      break;
    case PRODUCTION:
      options.favicon = PATHS.client('favicon.ico');
      break;
    case TEST:
      options.title = 'Sumo Survey Tests';
      break;
  }
  return options;
}

function getHtmlMinifyOptions() {
  return {
    removeComments: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    collapseInlineTagWhitespace: true,
    collapseBooleanAttributes: true,
    removeTagWhitespace: true,
    removeAttributeQuotes: true,
    useShortDoctype: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    caseSensitive: true,
  };
}

function getStatOptions() {
  return {
    colors: true,
    reasons: DEBUG,
    hash: VERBOSE,
    version: VERBOSE,
    timings: true,
    chunks: VERBOSE,
    chunkModules: VERBOSE,
    cached: VERBOSE,
    cachedAssets: VERBOSE,
    children: VERBOSE,
  };
}

// ===========================================================================
// UTILS
// ===========================================================================
function getEnv(target) {
  if (global.test === true) { return TEST; }

  switch (target) {
    case 'test':
      return TEST;
    case 'dev':
      return DEVELOPMENT;
    case 'build':
      return PRODUCTION;
    case 'stats':
      return PRODUCTION;
    case 'gulp':
      return DEVELOPMENT;
    default:
      throw Error('Unknown target!  Use `npm run script`', target);
  }
}
