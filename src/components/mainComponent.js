import { h } from 'hyperapp'
import RadarChart from './radarChart'
import BubbleChart from './bubbleChart'
import TreeMapChart from './treeMapChart'
import Globe from './globe'

/*
  Component that display the main page of the dashboard
*/

export default (props) =>
  <div>
    <section id='leftPanel'> // Left part that contains the category selector and the different state (ED, DD, LC ...)
    </section>
    <section id='mainGraphs'>
      <div id='map'>
        <Globe />
      </div>
      <BubbleChart />
      <RadarChart data={{compGroup: props.data.compGroup, setCompGroups: props.data.setCompGroups, setErrorMess: props.data.setErrorMess}}/>
    </section>
  </div>
