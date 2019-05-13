import { h } from 'hyperapp'
import Chart from 'chart.js'

export default (props) =>
  <div className='wrapperHistoricGraph'>
    {props.data.historical.state && (
      <canvas id='historicGraph' width='100' height='50'
        oncreate={(element) => {
          let ctx = element.getContext('2d')

          const yLabels = props.data.historical.val.reduce((acc, n) => acc.indexOf(n.category) === -1 ? [n.category, ...acc] : [...acc], [])

          const historicData = {
            labels: props.data.historical.val.map(x => parseInt(x.year)).reduce((acc, n) => [n, ...acc], []),
            datasets: [{
              borderColor: 'rgba(0,204,255,1)',
              backgroundColor: 'rgba(0,204,255,0.4)',
              data: props.data.historical.val.map(e => { return {x: parseInt(e.year), y: yLabels.indexOf(e.category)} })
            }]
          }

          // console.log(props.data.historical.val)
          // console.log(yLabels)

          const historicOptions = {
            legend: {
              display: false
            },
            fill: true,
            scales: {
              scaleLabel: {
                display: true
              },
              yAxes: [{
                ticks: {
                  callback: (value) => yLabels[value]
                }
              }]
            },
            tooltips: {
              enabled: false
            }
          }

          const historicGraph = new Chart(ctx, {
            type: 'line',
            data: historicData,
            options: historicOptions
          })
        }}
      />
    )}
  </div>
