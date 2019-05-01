import { h } from 'hyperapp'
import Chart from 'chart.js'

/*
  Component that display a Bubble Graph to show the different region
*/

export default (props) =>
  <div className='wrapperGraph'>
    {props.data.countryList && (
      <canvas className='wrapperGraph' id='bubble-chart'
        oncreate={(element) => {
          let ctx = element.getContext('2d')

          const bubbleData = {
            datasets: [
              {
                label: [
                  'Africa',
                  100
                ],
                backgroundColor: 'rgba(255,221,50,0.2)',
                borderColor: 'rgba(255,221,50,1)',
                data: [{
                  name: 'Africa',
                  x: 0,
                  y: -4,
                  r: 15
                }]
              },
              {
                label: [
                  'Europe',
                  100
                ],
                backgroundColor: 'rgba(60,186,159,0.2)',
                borderColor: 'rgba(60,186,159,1)',
                data: [{
                  name: 'Europe',
                  x: 0,
                  y: 2,
                  r: 13
                }]
              },
              {
                label: [
                  'Asia',
                  100
                ],
                backgroundColor: 'rgba(200,0,0,0.2)',
                borderColor: 'rgba(200,0,0,1)',
                data: [{
                  name: 'Asia',
                  x: 7,
                  y: 0.0,
                  r: 17
                }]
              },
              {
                label: [
                  'America',
                  100
                ],
                backgroundColor: 'rgba(60,186,0,0.2)',
                borderColor: 'rgba(60,186,0,1)',
                data: [{
                  name: 'America',
                  x: -5,
                  y: 0.0,
                  r: 20
                }]
              }
            ]
          }

          const bubbleOptions = {
            title: {
              display: true,
              text: 'Endanger species by region'
            },
            bubble: {
              name: {
                display: true
              },
              textStyle: {
                fontName: 'lato'
              }
            },
            tooltips: {
              enabled: true,
              displayColors: false,
              callbacks: {
                label: (t, d) => d.datasets[t.datasetIndex].label[0]
              }
              // placement: 'node:center'
            }, 
            /* hover: {
              mode: 'label'
            }, */
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                ticks: {
                  min: -10,
                  max: 10
                },
                display: false
              }],
              yAxes: [{
                ticks: {
                  min: -10,
                  max: 10
                },
                display: false
              }]
            }
          }

          const bubbleChart = new Chart(ctx, {
            type: 'bubble',
            data: bubbleData,
            options: bubbleOptions
          })
        }}
      />
    )}
  </div>
