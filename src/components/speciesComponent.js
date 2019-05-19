import { h } from 'hyperapp'
import { species } from '../wrapper/species'
import HistoricGraph from './historicGraph'

export default (props) =>
  <div id='speciesDetail' className={(props.data.id !== -1 /* && props.data.allActive */) ? 'active' : ''}>

    {props.data.id !== -1 && (
      <div>
        <div id='leaveIcon'>
          <img src='https://cdn2.iconfinder.com/data/icons/ui-kit/100/icon_error-512.png' alt='exit' onclick={() => { props.data.resetAll() }}/>
        </div>
        <section id='headerSpecies'>
          <div>
            {props.data.detailSpecies.commonName.state && (
              <h1>{props.data.detailSpecies.commonName.val.find(x => x.main === 'true').name}</h1>
            )}
            <p>{
              props.data.detailSpecies.commonName.state && (
                props.data.detailSpecies.commonName.val.map(res => {
                  return <span>{res.name}</span>
                })
              )
            }
            </p>
            {props.data.detailSpecies.scientificName.state && (
              <p> <div class='italic'>Scientific name: </div> {props.data.detailSpecies.scientificName.val}</p>
            )}
          </div>
        </section>
        <div className = 'speciesInfo'>
          <div class='specieBox' id='danger'>
            <h2>DANGERS</h2>
            {
              !props.data.detailSpecies.threats.state && (
                <img src='../../assets/gifLoading.gif' alt='loadingGif' class='loadingGif'/>
              )
            }
            <ul>
              {
                props.data.detailSpecies.threats.state && (
                  props.data.detailSpecies.threats.val.map(res => {
                    return <li id={`threat_${res.title}`}>{res.title} - {res.timing}</li>
                  })
                )
              }
            </ul>
          </div>
          <div class='specieBox'>
            <h2>HABITATS</h2>
            {
              !props.data.detailSpecies.habitats.state && (
                <img src='../../assets/gifLoading.gif' alt='loadingGif' class='loadingGif'/>
              )
            }
            <ul>
              {
                props.data.detailSpecies.habitats.state && (
                  props.data.detailSpecies.habitats.val.map(res => {
                    return <li id={`habitats_${res.habitat}`}>{res.habitat}</li>
                  })
                )
              }
            </ul>
          </div>
          <div class='specieBox'>
            <h2>MEASURE</h2>
            {
              !props.data.detailSpecies.measures.state && (
                <img src='../../assets/gifLoading.gif' alt='loadingGif' class='loadingGif'/>
              )
            }
            <ul>
              {
                props.data.detailSpecies.measures.state && (
                  props.data.detailSpecies.measures.val.map(res => {
                    return <li id={`measure_${res.title}`}>{res.title}</li>
                  })
                )
              }
            </ul>
          </div>
          <div class='specieBox bubbleInfos'>
            <h2>SINCE {props.data.detailSpecies.historical.state ? (props.data.detailSpecies.historical.val[0] ? props.data.detailSpecies.historical.val[0].year : '...') : '...'}</h2>
            <div id='sinceDiv'>
              <p>{props.data.detailSpecies.historical.state ? (props.data.detailSpecies.historical.val[0] ? props.data.detailSpecies.historical.val[0].category : 'Data not specified') : 'Data not specified'}</p>
            </div>
          </div>
          <div class='specieBox bubbleInfos' id='population'>
            <h2>POPULATION</h2>
            {
              !props.data.detailSpecies.populationTrend.state && (
                <img src='../../assets/gifLoading.gif' alt='loadingGif' class='loadingGif'/>
              )
            }
            {
              props.data.detailSpecies.populationTrend.state && (
                <div id='popTrend'>
                  <img src = {'../../assets/' + props.data.detailSpecies.populationTrend.val + '.png'}/>
                </div>
              )
            }
          </div>
          <div class='specieBox'>
            <h2>CATEGORY</h2>
            <HistoricGraph data={{historical: props.data.detailSpecies.historical}} />
          </div>
        </div>
        <div class='countryList'>
          <h2>Specie countries</h2>
          <section id='specieCountries'>
            {
              props.data.detailSpecies.countries.val.map(res => {
                return res.presence === "Extant" ? <p class='countryName'>{res.country}</p> : <p class='countryName strikethrough'>{res.country}</p>
              })
            }
          </section>
        </div>
      </div>
    )}
  </div>
