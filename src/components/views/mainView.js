import { h } from 'hyperapp'
/* import entryList from '../entryList' */
import MyChart from '../myChart'
import MainComponent from '../mainComponent'
import Wrapper from '../../wrapper/index'

export default (state, actions) =>
  <div>
    {
      !state.comprGroups && (
        Wrapper.CompGroup.list().then((resolvedValue) => {
          actions.setCompGroups(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    {state.comprGroups && state.comprGroups.length > 0 && (
      <MainComponent data={{compGroup: state.comprGroups, setCompGroups: actions.setCompGroups, setErrorMess: actions.setErrorMess}}/>
    )}
  </div>
