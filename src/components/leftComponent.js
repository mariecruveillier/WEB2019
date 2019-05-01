import { h } from 'hyperapp'
import {category} from '../wrapper/category'
import {className} from '../wrapper/className'

/*
  Component that display the left panel
*/

const eq = {
  'Critically Endangered': 'CR',
  'Data Deficient': 'DD',
  'Endangered': 'EN',
  'Extinct': 'EX',
  'Extinct in the Wild': 'EW',
  'Least Concern': 'LC',
  'Near Threatened': 'NT',
  'Not Evaluated': 'NE',
  'Vulnerable': 'VU'
}

export default (props) =>
  <section id='leftPanel'>
    {
      !props.data.categoryList && (
        category().list().then((resolvedValue) => {
          props.data.setCategory(resolvedValue)
        }, (error) => {
          props.data.setErrorMess(error)
        })
      )
    }
    {
      !props.data.classNames && (
        className().list().then((resolvedValue) => {
          props.data.setClassNames(resolvedValue)
        }, (error) => {
          props.data.setErrorMess(error)
        })
      )
    }
    <div id='categoryList'>
      {
        props.data.categoryList && (
          props.data.categoryList.map(res => {
            return <p className={res.state ? 'category active' : 'category'} onclick = {() => props.data.toggleCategory(res.name)}><span className='displayed'>{res.name}</span><span className='notDisplayed'>{eq[res.name]}</span></p>
          })
        )
      }
    </div>
    <div id='classNameList'>
      {
        props.data.classNames && props.data.classNames.length > 0 && (
          props.data.classNames.map(res => {
            console.log(res.name)
            return <img src = {'../../assets/' + res.name + '.png'} onclick = {() => props.data.toggleCompGroup(res.name)}/>
          })
        )
      }
    </div>
  </section>