import { h } from 'hyperapp'
import Chart from 'chart.js'
import {country} from '../wrapper/country'

const speedCanvas = document.getElementById('mainGraphs')

Chart.defaults.global.defaultFontFamily = 'Lato'
Chart.defaults.global.defaultFontSize = 18

export default (props) =>
  <div className='wrapperGraph'>
    <canvas className='mainChart' oncreate={(element) => {
      let ctx = element.getContext('2d')
      console.log(props)
      const speedData = {
        labels: props.data.countryList.map(x => x.name),
        datasets: [{
          label: ['Country'],
          data: props.data.countryList.map(x => x.count),
          lineTension: 0,
          fill: false,
          borderColor: 'black',
          backgroundColor: 'white',
          pointBorderColor: 'orange',
          pointBackgroundColor: 'rgba(255,150,0,0.5)',
          borderDash: [5, 5],
          pointRadius: 7,
          pointHoverRadius: 10,
          pointHitRadius: 30,
          pointBorderWidth: 2,
          pointStyle: 'rectRounded'
        }]
      }
      const chartOptions = {
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              color: 'white'
            },
            scaleLabel: {
              display: true,
              labelString: 'Country',
              fontColor: 'white'
            }
          }],
          yAxes: [{
            gridLines: {
              color: 'black',
              borderDash: [2, 5]
            },
            scaleLabel: {
              display: true,
              labelString: 'Population',
              fontColor: 'white'
            }
          }]
        }
      }
      const lineChart = new Chart(ctx, {
        type: 'bar',
        data: speedData
        // options: chartOptions
      })
    }} />
  </div>
