import angular from 'angular';
import showErrors from 'components/showErrors';
import lbServices from 'loopbackServices';

export default angular
  .module('app.pages.todos', [ lbServices, showErrors.name ])
  .config(routeConfig);

/* @ngInject */
function routeConfig($stateProvider) {
  $stateProvider
    .state('todos', {
      url: '/todos',
      templateUrl: require('./todos.html'),
      controller: TodosController,
      controllerAs: 'vm',
    });
}

/* @ngInject */
function TodosController($log, Note) {
  const vm = this;
  vm.notes = Note.find();

  vm.addTodo = todo => {
    if (todo.$invalid) { return; }

    Note.create(todo,
      result => {
        todo.$setPristine();
        todo.$setUntouched();
        Object
          .keys(todo)
          .filter(i => !i.startsWith('$'))
          .map(field => delete todo[ field ]); // eslint-disable-line no-param-reassign
        vm.notes.push(result);
        vm.error = null;
      },
      err => {
        vm.error = err.data.error;
      });
  };

  vm.delete = todo => {
    const index = vm.notes.indexOf(todo);

    Note.deleteById(todo,
      () => vm.notes.splice(index, 1),
      $log.error);
  };
}
