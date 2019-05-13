import { h } from 'hyperapp'
import RadarChart from './radarChart'
import BubbleChart from './bubbleChart'
import LeftComponent from './leftComponent'
import CountryChart from './graphCountry'
import { species } from '../wrapper/species'

/*
  Component that display the main page of the dashboard
*/

export default (props) =>
  <div id='mainPart'>
    <LeftComponent data={{
      setCategory: props.data.setCategory,
      categoryList: props.data.categoryList,
      setErrorMess: props.data.setErrorMess,
      toggleCategory: props.data.toggleCategory,
      toggleCompGroup: props.data.toggleCompGroup,
      classNames: props.data.classNames
    }} />
    <div id='mainViewer'>
      <div>
        <h1>Animalia</h1>
        <section id='searchContainer'>
          <input id='searchBar' type="text" placeholder='Research...'
            onkeyup = {(e) => {
              props.data.setResearchData({input: e.target.value, className: null, category: null, setResultat: props.data.setResult, setErrorMessage: props.data.setErrorMess})
            }
            }
          />
        </section>
        <section id='mainGraphs'>
          <CountryChart data={{countryList: props.data.countryList, setErrorMess: props.data.setErrorMess, toggleCountry: props.data.toggleCountry}}/>
          <BubbleChart data={{regionList: props.data.regionList, setErrorMess: props.data.setErrorMess}}/>
          <RadarChart data={{classNames: props.data.classNames, setErrorMess: props.data.setErrorMess}}/>
        </section>
        <section id='result'>
          {
            !props.data.resultUpdated && (
              species().search(props.data.researchData).then((resolvedValue) => {
                props.data.setResult(resolvedValue)
              }, (error) => {
                props.data.setErrorMess(error)
              })
            )
          }
          {
            props.data.resultList && (
              props.data.resultList.map(res => {
                return <p onclick = {() => props.data.setActive(res.id)}>{res.name}</p>
              })
            )
          }
        </section>
      </div>
    </div>
  </div>
