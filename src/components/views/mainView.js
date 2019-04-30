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
    {
      !state.country && (
        Wrapper.Country.countryList().then((resolvedValue) => {
          actions.setCountry(resolvedValue)
        }, (error) => {
          actions.setErrorMess(error)
        })
      )
    }
    {state.classNames && state.classNames.length > 0 && (
      <MainComponent data={{
        classNames: state.classNames,
        countryList: state.country,
        resultList: state.resultList,
        setErrorMess: actions.setErrorMess,
        setResult: actions.setResult,
        search: Wrapper.Species.search,
        setCategory: actions.setCategory,
        setCountry: actions.setCountry,
        toggleCategory: actions.toggleCategory,
        categoryList: state.categoryList,
        setResearchData: actions.setResearchData,
        resultUpdated: state.researchData.updated,
        researchData: {
          entry: state.researchData.input,
          className: state.researchData.className,
          category: state.researchData.category,
          country: state.researchData.country,
          limit: 8
        }
      }}/>
    )}
  </div>
