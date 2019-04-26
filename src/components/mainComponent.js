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
    <section id='searchContainer'>
      <input id='searchBar' type="text" placeholder='Research...'
        onkeyup = {(e) => {
          if (e.target.value.length !== 0) { // if input value isn't null
            props.data.search({entry: e.target.value, limit: 10}).then((value) => {
              props.data.setResult(value)
            }, (err) => {
              props.data.setErrorMess(err)
            })
          } else {
            props.data.setResult({list: []})
          }
        }
        }
      />
    </section>
    <section id='result'>
      {
        props.data.resultList && (
          props.data.resultList.map(res => {
            return <p>{res.name}</p>
          })
        )
      }
    </section>
  </div>
