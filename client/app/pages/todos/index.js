import angular from 'angular';
import lbServices from '../../../loopbackServices';

export default angular
  .module('app.pages.todos', [ lbServices ])
  .directive('showErrors', () => ({
    restrict: 'A',
    require: '^form',
    link(scope, el) {
      const inputEl = angular.element(el[ 0 ].querySelector('[id]'));

      inputEl.bind('blur', () => {
        el.toggleClass('has-error', hasError());
      });

      function hasError() {
        return inputEl[ 0 ].classList.contains('ng-invalid') && inputEl[ 0 ].classList.contains('ng-dirty');
      }
    },
  }))
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
function TodosController(Note) {
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
      err => console.log('err', err));
  };
}
