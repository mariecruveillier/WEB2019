import { h } from 'hyperapp'
/* import entryList from '../entryList' */
import MyChart from '../myChart'
import MainComponent from '../mainComponent'
import Wrapper from '../../wrapper/index'

export default (state, actions) =>
  <div>
    {
      !state.classNames && (
        Wrapper.ClassName.list({limit: 8}).then((resolvedValue) => {
          actions.setClassNames(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    {state.classNames && state.classNames.length > 0 && (
      <MainComponent data={{classNames: state.classNames, resultList: state.resultList, setErrorMess: actions.setErrorMess, setResult: actions.setResult, search: Wrapper.Species.search}}/>
    )}
  </div>
