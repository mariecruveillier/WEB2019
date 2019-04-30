import {species} from '../wrapper/species'

export default {

  setClassNames: (data) => (state) => {
    return ({
      ...state,
      classNames: data.list.reduce((acc, n) => [...acc, {name: n.className, count: n.count}], [])
    })
  },

  // Setting the result
  setResult: (data) => (state) => {
    const newState = ({
      ...state,
      researchData: {
        ...state.researchData,
        updated: true
      },
      resultList: data.list.reduce((acc, n) => [...acc, {name: n.name}], [])
    })
    console.log(newState)
    return newState
  },

  setResearchData: (val) => (state) => { // [input, className, category, setResultat, setErrorMessage]
    const newState = ({
      ...state,
      researchData: {
        input: val.input !== null ? val.input : state.researchData.input,
        className: val.className !== null ? val.className : state.researchData.className,
        category: val.category !== null ? val.category : state.researchData.category,
        country: val.country !== null ? val.country : state.researchData.country,
        updated: true
      }
    })
    species().search({
      entry: newState.researchData.input,
      className: newState.researchData.className,
      category: newState.researchData.category,
      limit: 8
    }).then((resolvedValue) => {
      val.setResultat(resolvedValue)
    }, (error) => {
      val.setErrorMessage(error)
    })
    return newState
  },

  // Setting all the categories
  setCategory: (data) => (state) => {
    return ({
      ...state,
      categoryList: data.categories.reduce((acc, n) => [...acc, {name: n.redlistCategory, state: false}], [])
    })
  },

  // toggle (if it's false -> true, if it's true -> false) category that have been clicked
  toggleCategory: (name) => (state) => {
    console.log(name)
    const id = state.categoryList.indexOf(state.categoryList.find(el => el.name === name))
    const arr = state.categoryList.reduce((acc, n) => [...acc, {name: n.name, state: false}], []) // setting all category to false (we don't want 2 activeted category at the same time)
    if (state.categoryList[id].state) {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
          category: '',
          updated: false
        },
        categoryList: [...arr.slice(0, id), {name: name, state: !state.categoryList[id].state}, ...arr.slice(id + 1, arr.length)]
      })
    } else {
      return ({
        ...state,
        researchData: {
          ...state.researchData,
          category: name,
          updated: false
        },
        categoryList: [...arr.slice(0, id), {name: name, state: !state.categoryList[id].state}, ...arr.slice(id + 1, arr.length)]
      })
    }
  },

  setErrorMess: (mess) => (state) => ({
    ...state,
    errMess: mess
  }),

  setCountry: (data) => (state) => {
    return ({
      ...state,
      country: data.countryList.reduce((acc, n) => [...acc, {name: n.countryName, count: n.count}], [])
    })
  }
  /*
  // Setting all the comprehensiveGroups
  setCompGroup: (data) => (state) => {
    return ({
      ...state,
      compGroupList: data.compGroup.reduce((acc, n) => [...acc, {name: n.redlistCategory, state: false}], [])
    })
  }
*/
}
