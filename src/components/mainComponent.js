import { h } from 'hyperapp'
import RadarChart from './radarChart'
import BubbleChart from './bubbleChart'
import TreeMapChart from './treeMapChart'

/*
  Component that display the main page of the dashboard
*/

export default (props) =>
  <div>
    <section id='leftPanel'> // Left part that contains the category selector and the different state (ED, DD, LC ...)
    </section>
    <section id='mainGraphs'>
      <TreeMapChart />
      <BubbleChart />
      <RadarChart data={{compGroup: props.data.compGroup, setCompGroups: props.data.setCompGroups, setErrorMess: props.data.setErrorMess}}/>
    </section>
  </div>
