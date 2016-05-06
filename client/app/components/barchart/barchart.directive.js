import angular from 'angular';
import d3 from 'd3';

// barchart
const MODULE_NAME = 'app.barchart.directive';
export default MODULE_NAME;

angular
  .module(MODULE_NAME, [])
  .directive('appBarchart', BarchartDirective);

/** @ngInject **/
function BarchartDirective($log, $window) {
  const directive = {
    restrict: 'E',
    scope: { data: '<', onClick: '&' },
    link,
  };
  return directive;

  function link(scope, element, attrs) {
    const margin = parseInt(attrs.margin, 10) || 0;
    const barHeight = parseInt(attrs.barHeight, 10) || 35;
    const barPadding = parseInt(attrs.barPadding, 10) || 5;
    const labelPadding = parseInt(attrs.barPadding, 10) || 15;
    const svg = d3
      .select(element[ 0 ])
      .append('svg')
      .style('width', '100%');

    $window.onresize = () => scope.$apply();

    scope.$watch(() => angular.element($window)[ 0 ].innerWidth, () => scope.render(scope.data));
    scope.$watch('data', data => scope.render(data), true);

    scope.render = data => {
      svg.selectAll('*').remove();
      if (!data) return;

      const width = d3.select(element[ 0 ]).node().offsetWidth - margin;
      const height = scope.data.length * (barHeight + barPadding);
      const color = d3.scale.category20();
      const xScale = d3.scale.linear()
        .domain([ 0, d3.max(data, d => d.count) ])
        .range([ 0, width ]);

      svg.attr('height', height);

      svg
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('height', barHeight)
        .attr('width', 140)
        .attr('x', Math.round(margin / 2))
        .attr('y', (d, i) => i * (barHeight + barPadding))
        .attr('fill', d => color(d.count))
        .on('click', item => scope.onClick({ item }))
        .transition()
        .duration(1000)
        .attr('width', d => xScale(d.count));

      svg.selectAll('categoryLabel')
        .data(data)
        .enter()
        .append('text')
        .attr('fill', '#ffffff')
        .on('click', item => scope.onClick({ item }))
        .attr('x', Math.round(margin / 2) + labelPadding)
        .attr('y', (d, i) => i * (barHeight + barPadding) + barHeight * 0.5 + barPadding)
        .text(d => `${d.text} (${d.count})`);
    };
  }
}
