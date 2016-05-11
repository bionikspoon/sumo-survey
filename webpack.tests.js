/* eslint-env angular/mocks, mocha */
/* eslint angular/window-service:0, func-names:0 */
import 'angular-mocks';
import chai from 'chai';
import sinon from 'sinon';
import chaiAsPromised from 'chai-as-promised';
import chaiDom from 'chai-dom';
import chaiSinon from 'sinon-chai';
const { beforeEach, afterEach } = global;

chai.use(chaiAsPromised);
chai.use(chaiDom);
chai.use(chaiSinon);

beforeEach(function () {
  this.sinon = sinon.sandbox.create();
});

afterEach(function () {
  this.sinon.restore();
});

global.inject = global.angular.mock.inject;
global.ngModule = global.angular.mock.module;
global.dump = global.angular.mock.dump;

const clientContext = require.context('./client', true, /\.spec\.js$/);
clientContext.keys().map(clientContext);
