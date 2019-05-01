import { h } from 'hyperapp'
import Chart from 'chart.js'
import {country} from '../wrapper/country'

const randomColor = function (number) {
  const tab = ['']
  const addColor = function (number, tab) {
    if (number > 1) {
      const tableau = [...tab, '#' + (Math.random() * 0xFFFFFF << 0).toString(16)]
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
      <canvas className='mainChart' width='400' height='400' oncreate={(element) => {
        let ctx = element.getContext('2d')
        const datas = {
          labels: props.data.countryList.map(x => x.name),
          datasets: [{
            label: ['Nombre d\'espèce par pays'],
            data: props.data.countryList.map(x => x.count),
            fill : true,
            backgroundColor: randomColor(props.data.countryList.length)
          }]
        }
        const chartOptions = {
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
      }} />
    )}
  </div>
