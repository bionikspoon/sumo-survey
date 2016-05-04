import angular from 'angular';
import app from './app';
import WebFont from 'webfontloader';

angular.element(document).ready(() => {
  angular.bootstrap(document, [ app ], { strictDi: __PRODUCTION__ });
});

WebFont.load({
  google: {
    families: [
      'Playfair+Display:400italic,900,400:latin',
      'Open+Sans:400,400italic,600,600italic:latin',
      'Material+Icons',
    ],
  },
});
