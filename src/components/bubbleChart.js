import { h } from 'hyperapp'
import Chart from 'chart.js'

/*
  Component that display a Bubble Graph to show the different region
*/

export default (props) =>
  <div className='wrapperGraph'>
    {props.data.regionList && (
      <canvas className='wrapperGraph' id='bubble-chart' width='400' height='400' style='background-image: url(../../assets/worldMap.png); background-size: contain; background-repeat: no-repeat; background-position: 25% 25%;'
        oncreate={(element) => {
          let ctx = element.getContext('2d')

          const bubbleData = {
            datasets: [
              // Le golf du mexique
              {
                label: [
                  props.data.regionList[10].name,
                  props.data.regionList[10].count
                ],
                backgroundColor: 'rgba(60,186,0,0.2)',
                borderColor: 'rgba(60,186,0,1)',
                data: [{
                  x: -4,
                  y: 2.5,
                  r: 1 + props.data.regionList[10].count / 500
                }]
              },
              {
                // L'europe
                label: [
                  props.data.regionList[3].name,
                  props.data.regionList[3].count
                ],
                backgroundColor: 'rgba(60,186,159,0.2)',
                borderColor: 'rgba(60,186,159,1)',
                data: [{
                  x: 0.8,
                  y: 5.7,
                  r: 1 + props.data.regionList[3].count / 500
                }]
              },
              {
                // La mer mediteranee
                label: [
                  props.data.regionList[5].name,
                  props.data.regionList[5].count
                ],
                backgroundColor: 'rgba(200,0,0,0.2)',
                borderColor: 'rgba(200,0,0,1)',
                data: [{
                  x: 0.5,
                  y: 3.7,
                  r: 1 + props.data.regionList[5].count / 500
                }]
              },
              {
                // La pan-Afrique soit quasiment toute l'afrique
                label: [
                  props.data.regionList[9].name,
                  props.data.regionList[9].count
                ],
                backgroundColor: 'rgba(255,221,50,0.2)',
                borderColor: 'rgba(255,221,50,1)',
                data: [{
                  x: 0.7,
                  y: 2,
                  r: 1 + props.data.regionList[9].count / 500
                }]
              },
              {
                // Le golf persique
                label: [
                  props.data.regionList[1].name,
                  props.data.regionList[1].count
                ],
                backgroundColor: 'rgba(180,120,180,0.2)',
                borderColor: 'rgba(180,120,180,1)',
                data: [{
                  x: 3,
                  y: 2.4,
                  r: 1 + props.data.regionList[1].count / 500
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
                label: (t, d) => d.datasets[t.datasetIndex].label
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
