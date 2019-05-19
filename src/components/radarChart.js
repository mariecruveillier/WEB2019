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
    {props.data.classNames && props.data.classNames.length > 0 && (
      <canvas className='mainChart' id='chartRadar' oncreate={(element) => {
        const cpyArr = props.data.classNames
        let ctx = element.getContext('2d')
        let chart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: cpyArr.map(x => eq[x.name]),
            datasets: [{
              label: 'Differents class of species',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderColor: 'rgba(0, 0, 0, 1.0)',
              pointBackgroundColor: 'rgba(255, 255, 255, 1)',
              data: cpyArr.map(x => x.count),
              pointRadius: 10,
              pointHoverRadius: 12
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
