import angular from 'angular';

const { blocks } = global;
const MODULE_NAME = 'app.auth';

export default MODULE_NAME;

angular.module(MODULE_NAME, [ ...blocks() ]);
