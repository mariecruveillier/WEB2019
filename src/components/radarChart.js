import { h } from 'hyperapp'
import Chart from 'chart.js'

/*
  Component that display a Radar Graph to show the different category
*/

const eq = {
  'ACTINOPTERYGII': 'Fishes',
  'AVES': 'Birds',
  'INSECTA': 'Insects',
  'REPTILIA': 'Reptiles',
  'GASTROPODA': 'Gastropods',
  'AMPHIBIA': 'Amphibia',
  'MAMMALIA': 'Mammals',
  'MALACOSTRACA': 'Crustaceans'
}
const eq2 = {
  'Fishes': 'ACTINOPTERYGII',
  'Birds': 'AVES',
  'Insects': 'INSECTA',
  'Reptiles': 'REPTILIA',
  'Gastropods': 'GASTROPODA',
  'Amphibia': 'AMPHIBIA',
  'Mammals': 'MAMMALIA',
  'Crustaceans': 'MALACOSTRACA'
}

export default (props) =>
  <div className='wrapperGraph'>
    {props.data.classNames && props.data.classNamesLoaded && (
      <canvas className='mainChart' id='chartRadar' oncreate={(element) => {
        const cpyArr = props.data.classNames
        let ctx = element.getContext('2d')
        let chart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: cpyArr.map(x => eq[x.name]),
            datasets: [{
              backgroundColor: 'rgba(60,150,159,0.2)',
              borderColor: 'rgba(60,150,159, 1.0)',
              borderWidth: 1,
              pointBackgroundColor: 'rgba(60,150,159, 0.5)',
              data: cpyArr.map(x => x.count),
              pointRadius: 5,
              pointHoverRadius: 7
            }]
          },
          options: {
            legend: {
              display: false,
              position: 'top'
            },
            responsive: true,
            aspectRatio: 1,
            title: {
              display: true,
              text: 'Species by Category'
            },
            scale: {
              ticks: {
                beginAtZero: true
              }
            },
            tooltips: {
              enabled: true,
              displayColors: false,
              callbacks: {
                label: (t, d) => d.datasets[t.datasetIndex].label
              }
            }
          }
        })
        document.getElementById('chartRadar').onclick = function (evt) {
          const activePoints = chart.getElementsAtEvent(evt)
          if (activePoints.length > 0) {
            const label = chart.data.labels[activePoints[0]._index]
            props.data.toggleCompGroup(eq2[label])
          }
        }
      }} />
    )}
  </div>
