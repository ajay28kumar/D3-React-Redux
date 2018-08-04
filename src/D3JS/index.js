import * as d3 from 'd3';
import { handleD3Payload } from '../listener';
import { initialState } from '../components/initialState';

const Chart = function() {};

const create = function(el) {
  const data = [6, 20, 21, 14, 2, 30, 7, 16, 25, 5, 11, 28, 10, 26, 9];
  const height = 400;
  const width = 600;
  /**
   * Creating svg canvas first
   */
  this.canva = d3
    .select(el)
    .append('svg')
    // .attr('class', `svg-${type + id}`)
    .attr('height', height)
    .attr('width', width)
    .style('background-color', initialState.state.backgroundColor);

  /**
   * scaling of graphs
   */

  const xScale = d3.scaleBand().domain(d3.range(data.length)).rangeRound([0, width]).paddingInner(0.05);

  const yScale = d3.scaleLinear().domain([0, d3.max(data)]).range([0, height]);

  this.canva
    .selectAll('react')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => xScale(i))
    .attr('y', d => height - yScale(d))
    .attr('width', xScale.bandwidth())
    .attr('height', d => yScale(d))
    .attr('fill', '#78814D');

  // canva.on

  d3.select('svg').on('click', () => {
    console.log('hello world');
    handleD3Payload('ClickAction', {});
  });
};

const update = function(eventName) {
  switch (eventName) {
    case 'backgroundColorChange':
      d3.selectAll('svg').style('background-color', initialState.state.backgroundColor);
      break;
    default:
      break;
  }
};

Chart.prototype = {
  create,
  update,
};

export default Chart;
