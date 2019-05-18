import { h } from 'hyperapp'
import {category} from '../wrapper/category'
import {className} from '../wrapper/className'

/*
  Component that display the left panel
*/

export default (props) =>
  <section id='leftPanel' className={props.data.menuState ? 'active' : ''}>
    <div id='menuTrigger'>
      <img src='../../assets/triggerMenu.png' onclick = {() => props.data.toggleMenu()} />
    </div>
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
            return <p className={res.state ? 'category bold' : 'category'} onclick = {() => props.data.toggleCategory(res.name)}>{res.name}</p>
          })
        )
      }
    </div>
    <div>
      <div id='classNameList'>
        {
          props.data.classNames && props.data.classNames.length > 0 && (
            props.data.classNames.map(res => {
              return <img src = {'../../assets/' + res.name + '.png'} className={res.state ? 'activeClassName' : ''} onclick = {() => props.data.toggleCompGroup(res.name)}/>
            })
          )
        }
      </div>
    </div>
  </section>