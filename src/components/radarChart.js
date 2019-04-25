import { h } from 'hyperapp'
import Chart from 'chart.js'

/*
  Component that display a Radar Graph to show the different category
*/

const randomScalingFactor = () => {
  return Math.round(Math.random() * 100)
}
export default (props) =>
  <canvas oncreate={(element) => {
    let ctx = element.getContext('2d')
    let chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: props.data.compGroup.map(x => x.name),
        datasets: [{
          label: 'Comprehensive Groups',
          backgroundColor: 'rgba(255, 0, 0, 1.0)',
          borderColor: 'rgba(255, 0, 0, 1.0)',
          pointBackgroundColor: 'rgba(255, 0, 0, 1.0)',
          data: new Array(props.data.compGroup.length).fill((Math.random() * (0.1 - 0.5) + 0.5))
        }]
      },
      options: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Chart.js Radar Chart'
        },
        scale: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    })
  }} />
