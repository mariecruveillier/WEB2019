import { h } from 'hyperapp'
import * as echarts from 'echarts/lib/echarts'
import 'echarts-gl/dist/echarts-gl'
import 'echarts-gl/src/chart/map3D'

require('echarts')
require('echarts-gl')

const canvas = document.createElement('canvas')
// const mapChart = echarts.init(document.getElementById('map'))
const mapChart = echarts.init(canvas, null, {
  width: 4096,
  height: 2048
})
mapChart.setOption({
  backgroundColor: '#cdcfd5',
  visualMap: {
    min: 0,
    max: 15,
    realtime: true,
    calculable: true,
    inRange: {  
      color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    }
  },
  series: [{
    type: 'map3D',
    map: 'world',
    shading: 'lambert',
    realisticMaterial: {
      roughness: 0.2,
      metalness: 0
    },
    postEffect: {
      enable: true,
      SSAO: {
        enable: true,
        radius: 2,
        intensity: 1
      }
    },
    groundPlane: {
      show: true
    },
    light: {
      main: {
        intensity: 2,
        shadow: true,
        shadowQuality: 'high',
        alpha: 30
      },
      ambient: {
        intensity: 0
      },
      ambientCubemap: {
        texture: 'data-gl/asset/canyon.hdr',
        exposure: 1,
        diffuseIntensity: 1
      }
    },
    viewControl: {
      distance: 50
    },

    regionHeight: 1,

    data: [
      {name: 'Afghanistan', value: 28397.812},
      {name: 'Angola', value: 19549.124}
    ]
  }]
})
