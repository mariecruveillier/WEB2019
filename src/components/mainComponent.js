import { h } from 'hyperapp'
import RadarChart from './radarChart'
import BubbleChart from './bubbleChart'
import TreeMapChart from './treeMapChart'

/*
  Component that display the main page of the dashboard
*/

export default (props) =>
  <div id='mainPart'>
    <section id='leftPanel'> // Left part that contains the category selector and the different state (ED, DD, LC ...)
    </section>
    <section id='mainGraphs'>
      <TreeMapChart data={{classNames: props.data.classNames, setErrorMess: props.data.setErrorMess}} id='map'/>
      <BubbleChart />
      <RadarChart data={{classNames: props.data.classNames, setErrorMess: props.data.setErrorMess}}/>
    </section>
    <section id='result'></section>
  </div>
