import { h } from 'hyperapp'
/* import entryList from '../entryList' */

export default (state, actions) =>
  <div>
    <p onclick={
      () => {
        console.log(actions)
        actions.CompGroup.speciesByGroup({group: 'conifers'}).then((resolvedValue) => {
          console.log(resolvedValue)
        }, (error) => {
          console.log(error)
        })
      }
    }>Click for action</p>
  </div>
