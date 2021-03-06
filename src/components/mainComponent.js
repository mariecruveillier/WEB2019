import { h } from 'hyperapp'
import RadarChart from './radarChart'
import BubbleChart from './bubbleChart'
import LeftComponent from './leftComponent'
import CountryChart from './graphCountry'
import { species } from '../wrapper/species'
import { country } from '../wrapper/country'

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
      classNames: props.data.classNames,
      toggleMenu: props.data.toggleMenu,
      menuState: props.data.menuState
    }} />
    <div id='mainViewer'>
      <div id='graphContainer'>
        <div>
          <div id='logo'>
            <img src = '../../assets/logo2.png'/>
          </div>
        </div>
        <section id='searchContainer'>
          <input id='searchBar' type="text" placeholder='Research...'
            onkeyup = {(e) => {
              props.data.setResearchData({input: e.target.value, className: null, category: null, setResultat: props.data.setResult, setErrorMessage: props.data.setErrorMess})
            }
            }
          />
          <section id='result'>
            {
              !props.data.resultUpdated && props.data.researchData.country !== '' && (
                country().species({country: props.data.researchData.country}).then((resolvedValue) => {
                  props.data.setResult({list: resolvedValue.result.slice(0, 8), from: 'redlist'})
                }, (error) => {
                  props.data.setErrorMess(error)
                })
              )
            }
            {
              !props.data.resultUpdated && props.data.researchData.region !== '' && (
                species().fetch({region: props.data.researchData.region, page: 0}).then((resolvedValue) => {
                  props.data.setResult({list: resolvedValue.result.slice(0, 8), from: 'redlist'})
                }, (error) => {
                  props.data.setErrorMess(error)
                })
              )
            }
            {
              !props.data.resultUpdated && props.data.researchData.country === '' && (
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
        </section>
        <section id='mainGraphs'>
          <CountryChart data={{countryList: props.data.countryList, setErrorMess: props.data.setErrorMess, toggleCountry: props.data.toggleCountry}}/>
          <BubbleChart data={{regionList: props.data.regionList, setErrorMess: props.data.setErrorMess, toggleRegion: props.data.toggleRegion}}/>
          <RadarChart data={{classNames: props.data.classNames, setErrorMess: props.data.setErrorMess, toggleCompGroup: props.data.toggleCompGroup, classNamesLoaded: props.data.classNamesLoaded}}/>
        </section>
      </div>
    </div>
  </div>
