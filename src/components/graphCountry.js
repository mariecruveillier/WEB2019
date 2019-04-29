import { h } from 'hyperapp'
import Chart from 'chart.js'

const speedCanvas = document.getElementById('mainGraphs')

Chart.defaults.global.defaultFontFamily = 'Lato'
Chart.defaults.global.defaultFontSize = 12

export default (props) =>
  <div className='wrapperGraph'>
    <canvas className='mainCHart' oncreate={(element) => {
      const cpyArr = props.data.classNames
      let ctx = element.getContext('2d')
      const speedData = {
        labels: cpyArr.map(x => x.name),
        datasets: [{
          label: ['Country'],
          data: ['10', '20', '30', '40', '5', '6', '7', '8', '1', '2', '3', '4', '5', '6', '7', '8'],
          // data: new Array(props.data.compGroup.length),
          lineTension: 0,
          fill: false,
          borderColor: 'black',
          backgroundColor: ['green', 'blue', 'red', 'yellow', 'green', 'blue', 'red', 'yellow', 'green', 'blue', 'red', 'yellow'],
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
      console.log(speedCanvas)
      const lineChart = new Chart(ctx, {
        type: 'pie',
        data: speedData
        // options: chartOptions
      })
    }} />
  </div>
