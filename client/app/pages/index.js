import pageHome from '../pages/home';
import pageAbout from '../pages/about';
import pageTodos from '../pages/todos';

export default angular
  .module('app.pages', [ pageHome.name, pageAbout.name, pageTodos.name ]);
