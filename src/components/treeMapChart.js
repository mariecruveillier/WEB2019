import { h } from 'hyperapp'

/*
  Component that display a TreeMap Graph to show several country
*/

const d3 = require('d3')

export default (props) =>
  <div id='map' className='wrapperGraph'>
    <canvas oncreate={(element) => {
      const margin = {top: 10, right: 10, bottom: 10, left: 10}
      const width = 445 - margin.left - margin.right
      const height = 445 - margin.top - margin.bottom
      const svg = d3.select('#map')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
      const data = [{ 'name': 'lala', 'value': 2 }, { 'name': 'nono', 'value': 3 }]
      const root = d3.stratify()
        .id(function (d) { return d.name }).parentId(function (d) { return d.parent })(data) // Here the size of each leave is given in the 'value' field in input data
      root.sum(function (d) { return +d.value })
      d3.treemap()
        .size([width, height])
        .padding(2)(root)

      console.log(root.leaves)
      svg
        .selectAll('rect')
        .data(root.leaves())
        .enter()
        .append('rect')
        .attr('x', function (d) { return d.x0 })
        .attr('y', function (d) { return d.y0 })
        .attr('width', function (d) { return d.x1 - d.x0 })
        .attr('height', function (d) { return d.y1 - d.y0 })
        .style('stroke', 'black')
        .style('fill', 'slateblue')
      svg
        .selectAll('text')
        .data(root.leaves())
        .enter()
        .append('text')
        .attr('x', function (d) { return d.x0 + 5 })
        .attr('y', function (d) { return d.y0 + 20 })
        .text(function (d) { return d.data.name })
        .attr('font-size', '15px')
        .attr('fill', 'white')
      console.log(root)
    }}/>
  </div>