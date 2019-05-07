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
              <p><span class='italic'>Scientific name:</span> {props.data.detailSpecies.scientificName.val}</p>
            )}
          </div>
        </section>
        <section id='textualInfos' className='speciesBloc'>
          <div class='specieBox'>
            <h2>DANGERS</h2>
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
        </section>
        <section id='graphicsSpecies' className='speciesBloc'>
          <div class='specieBox'>
            <h3>SINCE ...</h3>
          </div>
          <div class='specieBox'>
            {
              props.data.detailSpecies.populationTrend.state && (
                <p>{props.data.detailSpecies.populationTrend.val}</p>
              )
            }
            <h3>POPULATION</h3>
          </div>
          <div class='specieBox'>
            <HistoricGraph data={{historical: props.data.detailSpecies.historical}} />
            <h3>CATEGORY</h3>
          </div>
        </section>
        <section id='countryList'>
        </section>
      </div>
    )}
  </div>
