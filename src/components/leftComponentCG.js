import { h } from 'hyperapp'
// import {compGroup} from '../wrapper/comprehensiveGroups'
/*
  Component that display the left panel with comprehensive groups
*/

export default (props) =>
  <section id='leftPanel'>
    {
      !props.data.comprGroupList && (
        compGroup().list().then((resolvedValue) => {
          props.data.setCompGroup(resolvedValue)
        }, (error) => {
          props.data.setErrorMess(error)
        })
      )
    }
    /*
    <div id='comprGroupList'>
      {
        props.data.comprGroupList&& (
          props.data.compGroupList.map(res => {
            return <p className={res.state ? 'compGroup active' : 'compGroup'} onclick = {() => props.data.toggleCategory(res.name)}><img src={res.url}/></p>
          })
        )
      }
    </div>
    */
  </section>
