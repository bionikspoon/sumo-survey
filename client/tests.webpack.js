import 'babel-polyfill';
import 'angular';
import 'angular-mocks';

const context = require.context('.', true, /\.spec\.js$/);
context.keys().map(context);
