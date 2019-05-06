import { h } from 'hyperapp'
import Chart from 'chart.js'

export default (props) =>
  <div className='wrapperHistoricGraph'>
    <canvas id='historicGraph' width='100' height='50'
      oncreate={(element) => {
        let ctx = element.getContext('2d')
        const historicData = {
          datasets: [{
            label: 'historic graph',
            data: [{
              x: 2005,
              y: 2
            },
            {
              x: 2018,
              y: 5
            },
            {
              x: 2008,
              y: 3
            }]
          }]
        }

        const yLabels = {
          0: 'LC', 1: 'NT', 2: 'VU', 3: 'EN', 4: 'CR', 5: 'EW', 6: 'EX'
        }

        const historicOptions = {
          scales: {
            yAxes: [{
              ticks: {
                callback: (value) => yLabels[value]
              }
            }]
          },
          elements: {
            line: {
              tension: 0
            }
          }
        }

        const historicGraph = new Chart(ctx, {
          type: 'line',
          data: historicData,
          options: historicOptions
        })
      }}
    />
  </div>
