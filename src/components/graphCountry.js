import { h } from 'hyperapp'
import Chart from 'chart.js'
import {country} from '../wrapper/country'

const randomColor = function (number) {
  const tab = ['']
  const addColor = function (number, tab) {
    if (number > 1) {
      const tableau = [...tab, '#60A' + (Math.random() * 0xFFF << 0).toString(16)]
      // const tableau = [...tab, '#' + Math.floor(Math.random() * 16777215).toString(16)]
      return addColor(number - 1, tableau)
    } else {
      return tab
    }
  }
  return addColor(number, tab)
}

export default (props) =>
  <div className='wrapperGraph'>
    {props.data.countryList && props.data.countryList.length > 0 && (
      <canvas className='mainChart' id='searchByCountry' width='400' height='400' oncreate={(element) => {
        let ctx = element.getContext('2d')
        const datas = {
          labels: props.data.countryList.map(x => x.name),
          datasets: [{
            label: props.data.countryList.count,
            data: props.data.countryList.map(x => x.count),
            fill: true,
            backgroundColor: randomColor(props.data.countryList.length)
          }]
        }

        const chartOptions = {
          title: {
            display: true,
            text: 'Species by country'
          },
          legend: {
            display: false
          },
          tooltips: {
            enabled: true,
            displayColors: false,
            callbacks: {
              label: (t, d) => datas.datasets[t.datasetIndex].label
            }
            // placement: 'node:center'
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: false,
                color: 'transparent'
              },
              scaleLabel: {
                display: false,
                labelString: 'Country',
                fontColor: 'white'
              }
            }],
            yAxes: [{
              gridLines: {
                color: 'transparent',
                borderDash: [2, 5]
              },
              scaleLabel: {
                display: false,
                labelString: 'Nombre d\'espèces',
                fontColor: 'white'
              }
            }]
          }
        }

        const lineChart = new Chart(ctx, {
          type: 'bar',
          data: datas,
          options: chartOptions
        })

        document.getElementById('searchByCountry').onclick = function (evt) {
          const activePoints = lineChart.getElementsAtEvent(evt)
          if (activePoints.length > 0) {
            const label = datas.labels[activePoints[0]._index]
            props.data.countryList && props.data.countryList.length > 0 && (
              props.data.toggleCountry(label)
            )
          }
        }
      }} />
    )}
  </div>
